import PostCard from "@/components/Posts/PostCard";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getCategory, getPostsByCategory } from "@/lib/cosmic";

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
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </SectionWrapper>
  );
}
