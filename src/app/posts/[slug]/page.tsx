import Author from "@/components/Posts/Author/Author";
import CategoryTag from "@/components/Posts/Categories/CategoryTag";
import PostCard from "@/components/Posts/Post/PostCard";
import RelatedPostCard from "@/components/Posts/Post/RelatedPostCard";
import { getPost, getRelatedPosts } from "@/lib/cosmic";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost({ params });
  return {
    title: `${post.title}`,
    description: `${post.metadata.teaser}`,
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const post = await getPost({ params });
  const relatedPosts = await getRelatedPosts({ params });
  return (
    <main className="w-full p-5 xl:w-3/5 2xl:w-1/2  xl:p-0 mx-auto flex-col flex items-center  xl:mt-[5rem] ">
      <h2 className="text-4xl xl:text-6xl font-semibold w-full   text-zinc-800 dark:text-slate-100">
        {post.title}
      </h2>

      <Image
        width={1400}
        height={600}
        className="my-5 h-[300px] md:h-[450px] xl:h-[600px] w-full bg-no-repeat object-cover object-center rounded-lg"
        src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
        priority
        alt={post.title}
        placeholder="blur"
        blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
      />
      <div className=" w-full mb-14 inline-flex justify-between ">
        <Author post={post} />
        <CategoryTag post={post} />
      </div>
      {/* <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" /> */}

      <div
        dangerouslySetInnerHTML={{ __html: post.metadata.content ?? "" }}
        className="text-zinc-800 dark:text-white text-[1.3rem] lg:text-md font-light w-full lg:w-4/5"
      ></div>
      <div className="flex-column lg:flex  my-20 gap-6">
        {relatedPosts &&
          relatedPosts
            .slice(0, 2)
            .map((post) => <RelatedPostCard key={post.id} post={post} />)}
      </div>
    </main>
  );
}
