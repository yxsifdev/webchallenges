import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen p-2 grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-4">
      <LeftBar />
      <div className="h-[calc(100vh-1rem)] overflow-y-auto">
        <TopBar />
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 mt-4">
          <div className="p-4 border bg-neutral-800/60 border-neutral-800 rounded-3xl">
            CONTENT
          </div>
          <ul className="space-y-4">
            <li>
              <a
                href=""
                className="flex p-2 border bg-neutral-800/60 border-neutral-800 rounded-3xl"
              >
                <div className="cursor-pointer size-14 rounded-2xl bg-linear-to-br from-blue-500 via-yellow-50 to-sky-500"></div>
                <div className="flex flex-col justify-center ml-4 text-sm">
                  <h2 className="font-medium">TodoAPP con Next.js</h2>
                  <p className="text-neutral-500">Frontend + Backend</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex p-2 border bg-neutral-800/60 border-neutral-800 rounded-3xl"
              >
                <div className="cursor-pointer size-14 rounded-2xl bg-linear-to-br from-blue-500 via-yellow-50 to-sky-500"></div>
                <div className="flex flex-col justify-center ml-4 text-sm">
                  <h2 className="font-medium">TodoAPP con Next.js</h2>
                  <p className="text-neutral-500">Frontend + Backend</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex p-2 border bg-neutral-800/60 border-neutral-800 rounded-3xl"
              >
                <div className="cursor-pointer size-14 rounded-2xl bg-linear-to-br from-blue-500 via-yellow-50 to-sky-500"></div>
                <div className="flex flex-col justify-center ml-4 text-sm">
                  <h2 className="font-medium">TodoAPP con Next.js</h2>
                  <p className="text-neutral-500">Frontend + Backend</p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <RightBar />
    </main>
  );
}
