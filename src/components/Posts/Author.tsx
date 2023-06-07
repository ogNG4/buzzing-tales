import { Post } from "@/types/types";
import Image from "next/image";
import helpers from "@/helpers/dateToString";
export default function Author({ post }: { post: Post }): JSX.Element {
  return (
    <div className="flex items-center space-x-1">
      <Image
        className="h-8 w-8 rounded-full"
        src={`${post.metadata.author?.metadata.image?.imgix_url}?w=100&auto=format`}
        width={32}
        height={32}
        alt={post.title}
      ></Image>
      <a
        href={`/author/${post.metadata.author?.slug}`}
        className="text-lg font-bold text-zinc-800 dark:text-amber-200"
      >
        {post.metadata.author?.title}
      </a>

      <span className="text-md  text-zinc-700 dark:text-gray-100">
        on {helpers.dateToString(post.metadata.published_date)}
      </span>
    </div>
  );
}
