import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { AppRole } from "@/lib/profiles";

const allowedRoles = new Set<AppRole>(["member", "admin", "super_admin"]);

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  const roleParam = searchParams.get("role");
  const role =
    roleParam && allowedRoles.has(roleParam as AppRole)
      ? (roleParam as AppRole)
      : null;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const fullName =
          (user.user_metadata?.full_name as string | undefined) ||
          (user.user_metadata?.name as string | undefined) ||
          null;

        if (fullName) {
          await supabase
            .from("profiles")
            .update({ full_name: fullName })
            .eq("id", user.id);
        }

        if (role) {
          await supabase.rpc("apply_signup_role", { selected_role: role });
        }
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
