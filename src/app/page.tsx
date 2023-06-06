import { getAllPosts} from "@/lib/cosmic";

import PostCard from "@/components/Posts/PostCard";

export default async function Page(): Promise<JSX.Element> {
    
    const posts = await getAllPosts();
    console.log(posts[1].metadata.categories)

  return (
    <>
      <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
               
              </div>
            );
          })}
      </main>
    </>
  );
}
