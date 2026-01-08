import { signIn } from "@/auth";
import { GitHubIcon } from "@/icons/GitHub";

export default function AuthPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-8 space-y-8 border bg-neutral-800/60 border-neutral-800 rounded-3xl">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Web Challenges</h1>
          <p className="text-sm text-neutral-400">
            Accede a tu cuenta utilizando GitHub
          </p>
        </div>
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 font-medium bg-white cursor-pointer rounded-2xl text-neutral-900 gap-x-2"
          >
            <GitHubIcon />
            Iniciar sesión con GitHub
          </button>
        </form>
      </div>
    </main>
  );
}
