import { BookIcon } from "@/icons/Book";
import { HomeIcon } from "@/icons/Home";
import { CupIcon } from "@/icons/Cup";
import { MapIcon } from "@/icons/Map";
import { PuzzleIcon } from "@/icons/Puzzle";
import { headers } from "next/headers";
import { Suspense } from "react";
import Link from "next/link";
import { UserIcon } from "@/icons/User";

const LINKS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/challenges", label: "Challenges", icon: PuzzleIcon },
  { href: "/learning-path", label: "LearningPath", icon: MapIcon },
  { href: "/learn", label: "Learn", icon: BookIcon },
  { href: "/leaderboard", label: "Leaderboard", icon: CupIcon },
  { href: "/profile", label: "Profile", icon: UserIcon },
];

async function NavLinks() {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path") || "/";

  return (
    <ul className="space-y-8">
      {LINKS.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <Link
            href={href}
            className={`flex items-center justify-center transition-colors ${
              href === pathname
                ? "text-white"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            {Icon && <Icon className="size-7" />}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function LeftBar() {
  return (
    <nav className="flex flex-col items-center w-24 min-h-[calc(100vh-1rem)] py-5 bg-neutral-800/60 border border-neutral-800 gap-y-8 rounded-3xl">
      <div>
        <img
          src="/default-avatar.webp"
          alt="Avatar"
          className="rounded-xl size-10"
        />
      </div>
      <Suspense
        fallback={
          <div className="w-8 h-full rounded-lg animate-pulse bg-neutral-700 max-h-32" />
        }
      >
        <NavLinks />
      </Suspense>
    </nav>
  );
}
