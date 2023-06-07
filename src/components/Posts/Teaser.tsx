import { Post } from "@/types/types";

export default function Teaser({ post }: { post: Post }) {
  return (
    <h2
      dangerouslySetInnerHTML={{ __html: post.metadata.teaser ?? "" }}
      className="mt-2 text-zinc-900 dark:text-slate-100"
    ></h2>
  );
}
