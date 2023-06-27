import { Post } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

export default function RelatedPostCard({ post }: { post: Post }) {
  return (
    <div>
      {post.metadata.hero?.imgix_url && (
        <Link href={`/posts/${post.slug}`}>
          <Image
            className="mb-5 h-[240px] rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
            src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
            width={1400}
            height={240}
            alt={post.title}
          />
        </Link>
      )}
      <h2 className="pb-3 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
    </div>
  );
}
