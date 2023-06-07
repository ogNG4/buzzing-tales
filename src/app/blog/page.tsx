import CategoryTag from "@/components/Posts/Categories/CategoryTag";
import PostCard from "@/components/Posts/PostCard";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getAllCategories, getAllPosts } from "@/lib/cosmic";

export default async function Blog(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <SectionWrapper>
      <h1>Blog</h1>
      <div className=" flex justify-center space-x-4">
        {categories &&
          categories.map((category) => (
            <CategoryTag key={category.id} category={category} />
          ))}
      </div>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </SectionWrapper>
  );
}
