import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 gap-10">
      <h1 className="text-center text-xl">
      🚀 Seeking an Expert Fullstack Developer: Your Go-To for Software Needs
      🌟      </h1>
      <div className="nes-container with-title is-centered bg-blue-200 md:w-[45rem]">
        <p className="title">Greetings!</p>
        <p>
        As a Full Stack practitioner, I bring fresh perspectives and a solid
          core knowledge of networking, OS, DBMS, and data structures. Let&apos;
          collaborate to transform your tech challenges into innovative
          solutions.
        </p>
      </div>

      <div className="nes-container is-rounded bg-white">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={100}
            height={100}
            src={"/axe-and-shield.webp"}
            alt="Axe & Shield"
          />

          <p className="text-center">These are my skills</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Link href="#" className="nes-badge">
              <span className="is-dark">Next.js</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-primary">TypeScript</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-warning">JavaScript</span>
            </Link>
         
            <Link href="#" className="nes-badge">
            <span className="is-error">React.js</span>
          </Link>
          <Link href="#" className="nes-badge">
            <span className="is-success">Express.js</span>
          </Link>
          <Link href="#" className="nes-badge is-splited">
            <span className="is-dark">UI</span>
            <span className="is-primary">UX</span>
          </Link>
            
          </div>
        </div>
      </div>
    </main>
  );
}
