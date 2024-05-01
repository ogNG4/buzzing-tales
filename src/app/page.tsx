import PostCard from "@/components/Posts/Post/PostCard";
import HomePageHero from "@/components/Home/HomePageHero";
import { getLatestPost } from "@/lib/cosmic";

export default async function HomePage(): Promise<JSX.Element> {
  const latestPost = await getLatestPost();

  return (
    <>
      <main className="mx-auto pt-24 w-full flex-col space-y-16 px-4 pb-10 lg:px-0">
        <HomePageHero />
        <div className="max-w-4xl mx-auto">
          <h2 className=" text-5xl w-max font-bold text-zinc-700 dark:text-zinc-300 mx-auto lg:mx-0 ">
            Whats new?
          </h2>
        </div>
        {latestPost && <PostCard post={latestPost} />}
      </main>
    </>
  );
}
