CREATE OR REPLACE FUNCTION public.can_view_avatar(target_role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE public.current_user_role()
    WHEN 'super_admin' THEN true
    WHEN 'admin' THEN target_role = 'member'
    WHEN 'member' THEN target_role = 'member'
    ELSE false
  END;
$$;
