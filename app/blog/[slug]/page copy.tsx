import { Mdx } from "@/components/mdx-component";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

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
    <h1>
      <Mdx code={post.body.code} />
    </h1>
  );
}
