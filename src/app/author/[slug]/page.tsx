import Avatar from "@/components/UI/Avatar";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getAuthor, getAuthorPosts } from "@/lib/cosmic";

export default async function Author({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const author = await getAuthor({ params });
  const authorPosts = await getAuthorPosts({ authorId: author.id });
  return (
    <SectionWrapper>
      <div className="bg-gray-500 w-3/4 h-2">
        <Avatar author={author} />
      </div>
    </SectionWrapper>
  );
}
