import { Category, Post } from "@/types/types";
import Link from "next/link";

export default function CategoryTag({ post }: { post: Post }) {
  return (
    <Link href={`/category/${post.metadata.category?.slug}`}>
      <div className=" w-max px-2 text-lg font-bold rounded-lg border-2 bg-amber-300 text-zinc-700 border-amber-300 dark:bg-transparent dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-300 dark:hover:text-zinc-700  ">
        {post.metadata.category?.title}
      </div>
    </Link>
  );
}
