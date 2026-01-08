import { auth } from "@/auth";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function ProfileData() {
  const session = await auth();
  if (!session) redirect("/auth");

  const db = await createClient();

  const { data: profile } = await db
    .from("profiles")
    .select("description, badges, role")
    .eq("id", session.user.id)
    .single();
  return (
    <div className="profile-container">
      <h1>Hola, {session.user.name}</h1>
      <span className="badge-role">{profile?.role}</span>

      <p className="bio">{profile?.description || "Sin descripción"}</p>

      <div className="badges">
        {profile?.badges?.map((b: any) => (
          <span key={b}>{b}</span>
        ))}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen p-2 grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-4">
      <LeftBar />

      <div className="h-[calc(100vh-1rem)] overflow-y-auto">
        <Suspense fallback={<div className="w-full h-10" />}>
          <ProfileData />
        </Suspense>
      </div>
      <RightBar />
    </main>
  );
}
