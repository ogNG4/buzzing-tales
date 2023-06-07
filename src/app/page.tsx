import PostCard from "@/components/Posts/PostCard";
import HomePageHero from "@/components/Home/HomePageHero";

import { getLatestPost } from "@/lib/cosmic";

export default async function Page(): Promise<JSX.Element> {
  const latestPost = await getLatestPost();

  return (
    <>
      <main className="mx-auto mt-4 w-full  flex-col space-y-16 px-4 lg:px-0">
        <HomePageHero />

        {latestPost && <PostCard post={latestPost} />}
      </main>
    </>
  );
}
