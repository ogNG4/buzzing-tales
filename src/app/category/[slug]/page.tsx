import PostCard from "@/components/Posts/Post/PostCard";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getCategory, getPostsByCategory } from "@/lib/cosmic";
import Link from "next/link";

export default async function Category({
  params,
}: {
  params: { id: string; slug: string };
}): Promise<JSX.Element> {
  const category = await getCategory({ params });
  const posts = await getPostsByCategory({ categoryId: category.id });

  return (
    <SectionWrapper>
      <h1>{category.title}</h1>
      {posts.length === 0 && (
        <div className="mx-auto w-max text-center">
          <p className=" text-2xl text-zinc-800 dark:text-white">
            No posts found....
          </p>
          <Link href="/blog">
            <button className="mt-5 bg-amber-400 hover:bg-amber-500 text-slate-100 text-2xl px-3 py-2 rounded-md font-semibold">
              Go back
            </button>
          </Link>
        </div>
      )}
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </SectionWrapper>
  );
}
