import { BellIcon } from "@/icons/Bell";
import { QuestionIcon } from "@/icons/Question";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between h-10 pt-4">
      <div className="text-xl font-medium">
        Todo listo para continuar,{" "}
        <span className="font-semibold text-sky-300">Yosif</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center justify-center border rounded-full cursor-pointer hover:bg-neutral-800 bg-neutral-800/60 border-neutral-800 size-10">
          <QuestionIcon />
        </button>
        <button className="relative inline-flex items-center justify-center border rounded-full cursor-pointer hover:bg-neutral-800 bg-neutral-800/60 border-neutral-800 size-10">
          <span className="absolute top-0 right-0 bg-red-500 rounded-full size-3"></span>
          <BellIcon />
        </button>
      </div>
    </header>
  );
}
