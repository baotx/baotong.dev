import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function Profile() {
  return (
    <div className="flex flex-col items-center ">
      <Link href="/" className="text-2xl">
        Ryan Tong
      </Link>
      <div className="w-32 h-32 m-4">
        <Image
          src="/images/avatars/ryantong1.jpg"
          alt="Ryan Tong"
          width="150"
          height="150"
          className="rounded-full"
        />
      </div>
      <div className="mt-6 space-y-7 text-sm text-muted-foreground">
        <p>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          {" · "}
          <Link className="hover:underline" href="/blogs">
            Blogs
          </Link>
          {" · "}
          <Link className="hover:underline" href="/projects">
            Projects
          </Link>
          {" · "}
          <Link
            className="hover:underline"
            href="https://www.dropbox.com/scl/fi/giuaevweisvft1jja2wrj/RyanTong-Resume-v2.3-30062025.pdf?rlkey=x5llwnbgacxsxn6hscltthnfx&st=l1nr1hi2&dl=1"
          >
            Resume <Icons.download className="inline-block h-3 w-3" />
          </Link>
        </p>
        <p>
          I am a software engineer based in Sydney. Learning about scalable
          webapp.
        </p>
        <p>
          <Link href="https://github.com/baotx">
            <Button variant="ghost" size="sm" className="px-1 h-[32px]">
              <Icons.github className="h-6 w-6 text-curentColor" />
              <span className="sr-only">Github</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/baotx/">
            <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
              <Icons.linkedin className="" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </Link>
          <ModeToggle />
        </p>
      </div>
    </div>
  );
}
