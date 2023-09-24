import { Icons } from "@/components/icons";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="py-4 flex flex-col space-y-4">
      {allProjects.map((project) => (
        <div
          className="border-solid border-2 rounded-md bg-secondary p-4 space-y-4"
          key={project.slug}
        >
          <h3 className="text-xl">{project.title}</h3>
          <div className="text-sm">{project.description}</div>
          <p className="text-sm text-muted-foreground">
            Technologies Used: <b className="text-foreground">{project.tech}</b>
          </p>
          <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
            <Link
              className="flex flex-row space-x-2 hover:text-foreground"
              href={project.link}
            >
              <Icons.link className="w-5 h-5" />
              <p>Demo</p>
            </Link>
            <Link
              className="flex flex-row space-x-2 hover:text-foreground"
              href={project.repository}
            >
              <Icons.github className="w-5 h-5" />
              <p>Repository</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
