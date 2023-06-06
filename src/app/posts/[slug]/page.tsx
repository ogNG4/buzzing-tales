
import { getAllPosts } from "@/lib/cosmic";
import PostCard from "@/components/Posts/PostCard";

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();

  return (
    <>
      <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
        Siemano
      </main>
    </>
  );
}
