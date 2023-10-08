import { allPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 py-4">
      {allPosts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map((post) => (
        <article
          key={post.slugAsParams}
          className="group relative border-solid border-2 rounded-md bg-secondary p-4"
        >
          <header className="pb-4">
            <h1 className="text-xl font-medium tracking-tight">{post.title}</h1>
            <small className="text-muted-foreground">
              {formatDate(post.date)}
            </small>
          </header>
          <p className="text-sm text-muted-foreground">{post.description}</p>
          <Link
            href={`/blog/${post.slugAsParams}`}
            className="absolute inset-0"
          >
            <span className="sr-only">View Article</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
