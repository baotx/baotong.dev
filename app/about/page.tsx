import "@/styles/mdx.css";
import { allAbouts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-component";

export default async function Page() {
  const about = allAbouts[0];

  return (
    <article className="container relative">
      <Mdx code={about.body.code} />
    </article>
  );
}
