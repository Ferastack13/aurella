-- Allow chosen signup role from auth metadata + signup role RPC

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  selected_role text := COALESCE(NEW.raw_user_meta_data ->> 'role', 'member');
  assigned_role public.app_role := 'member';
BEGIN
  IF selected_role IN ('member', 'admin', 'super_admin') THEN
    assigned_role := selected_role::public.app_role;
  END IF;

  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', split_part(COALESCE(NEW.email, ''), '@', 1)),
    assigned_role
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.prevent_role_escalation()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    -- Service role / SQL editor / flagged RPC
    IF auth.uid() IS NULL THEN
      RETURN NEW;
    END IF;
    IF current_setting('aurella.allow_role_update', true) = 'on' THEN
      RETURN NEW;
    END IF;
    IF public.current_user_role() IS DISTINCT FROM 'super_admin'::public.app_role THEN
      RAISE EXCEPTION 'Only super admins can change roles';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.apply_signup_role(selected_role text)
RETURNS public.app_role
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  assigned public.app_role := 'member';
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF selected_role IN ('member', 'admin', 'super_admin') THEN
    assigned := selected_role::public.app_role;
  END IF;

  PERFORM set_config('aurella.allow_role_update', 'on', true);

  UPDATE public.profiles
  SET role = assigned
  WHERE id = auth.uid();

  RETURN assigned;
END;
$$;

REVOKE ALL ON FUNCTION public.apply_signup_role(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.apply_signup_role(text) TO authenticated;
