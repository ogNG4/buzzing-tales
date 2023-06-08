import PostCard from "@/components/Posts/PostCard";
import HomePageHero from "@/components/Home/HomePageHero";

import { getAllPosts, getLatestPost } from "@/lib/cosmic";

export default async function HomePage(): Promise<JSX.Element> {
  const latestPost = await getLatestPost();
  // const post = await getAllPosts();

  return (
    <>
      <main className="mx-auto mt-4 w-full  flex-col space-y-16 px-4 lg:px-0">
        <HomePageHero />
        <div className="max-w-4xl mx-auto ">
          <h2 className=" text-5xl lg:text-7xl w-max font-bold  text-zinc-700 dark:text-zinc-300 mx-auto lg:mx-0 ">
            Whats new?
          </h2>
        </div>
        {latestPost && <PostCard post={latestPost} />}
      </main>
    </>
  );
}
