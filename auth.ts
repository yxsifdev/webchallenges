import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { createAdminClient } from "./utils/supabase/service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  callbacks: {
    async session({ session, user }) {
      const db = createAdminClient();
      const { data: profile } = await db
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: profile?.role ?? "user",
        },
      };
    },
  },
  pages: {
    signIn: "/auth",
    signOut: "/auth",
  },
});
