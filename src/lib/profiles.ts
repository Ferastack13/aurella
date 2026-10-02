export type AppRole = "member" | "admin" | "super_admin";

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: AppRole;
  avatar_path: string | null;
  created_at: string;
  updated_at: string;
};

export const roleLabels: Record<AppRole, string> = {
  member: "Member",
  admin: "Admin",
  super_admin: "Super Admin",
};

export function initialsFromProfile(profile: Pick<Profile, "full_name" | "email">) {
  const source = (profile.full_name || profile.email || "?").trim();
  const parts = source.split(/[\s@._-]+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}
