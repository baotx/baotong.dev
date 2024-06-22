import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx-component";

import "@/styles/mdx.css";
import Image from "next/image";

import { formatDate } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) notFound();

  return post;
}

export default async function Page({ params }: PageProps) {
  const post = await getPostFromParams(params.slug);

  return (
    <article className="container relative">
      <div className="pb-3">
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground pb-2"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
    </article>
  );
}
