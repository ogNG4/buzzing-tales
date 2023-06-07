import { Post } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Author from "./Author";
import Teaser from "./Teaser";
import CategoryTag from "./Categories/CategoryTag";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="max-w-4xl mx-auto bg-gray-200 dark:bg-gray-800 p-4 rounded-xl border-2 border-zinc-100 dark:border-slate-600">
      {post.metadata.hero?.imgix_url && (
        <Link href={`/posts/${post.slug}`}>
          <Image
            width={2800}
            height={400}
            className="mb-5 h-[400px] w-full rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
            src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
            priority
            alt={post.title}
            placeholder="blur"
            blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
          />
        </Link>
      )}
      <div className="flex items-center space-x-5 mb-3">
        <h2 className=" text-xl font-semibold text-zinc-800 dark:text-zinc-200 ">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <CategoryTag post={post} />
      </div>
      <Author post={post} />
      <Teaser post={post} />
    </div>
  );
}
