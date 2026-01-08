import { getUsers } from "@/actions/users";
import { UserType } from "@/types/user";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function Todos() {
  let users;
  try {
    users = await getUsers();
  } catch (error: any) {
    if (error.cause?.includes("Unauthorized")) {
      redirect("/auth");
    }
  }

  return (
    <ul>
      {users?.map((user: UserType) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function TestSupabase() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Todos />
    </Suspense>
  );
}
