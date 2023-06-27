import AuthorCard from "@/components/Posts/Author/AuthorCard";
import PostCard from "@/components/Posts/Post/PostCard";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getAuthor, getAuthorPosts } from "@/lib/cosmic";

export default async function Author({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const author = await getAuthor({ params });
  const posts = await getAuthorPosts({ authorId: author.id });
  return (
    <SectionWrapper>
      <AuthorCard author={author} />
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </SectionWrapper>
  );
}
