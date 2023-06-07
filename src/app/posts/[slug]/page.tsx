import { getPost } from "@/lib/cosmic";
import PostCard from "@/components/Posts/PostCard";

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const post = await getPost({ params });

  return (
    <>
      <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
        {post.title}
      </main>
    </>
  );
}
