import { auth } from "@/auth";
import { createAdminClient } from "@/utils/supabase/service";

export async function getUsers(userId?: string) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized: No session found", {
      cause: "Unauthorized",
    });
  }

  // 2. Autorización (CRÍTICO):
  // Verifica que el usuario tenga rol de admin. Ajusta esta lógica según tu DB.
  // Si usas Auth.js, asegúrate de extender la sesión para incluir el rol.
  /* if (session.user.role !== 'admin') {
     throw new Error("Forbidden: Insufficient permissions");
  }
  */
  const db = createAdminClient();
  let query = db.schema("next_auth").from("users").select("*");

  if (userId) {
    query = query.eq("id", userId);
  }

  const { data: users, error } = await query;

  if (error) {
    console.error("Admin Fetch Error:", error);
    throw new Error(`Error fetching users: ${error.message}`);
  }

  if (userId) {
    return users?.[0] || null;
  }

  return users;
}
