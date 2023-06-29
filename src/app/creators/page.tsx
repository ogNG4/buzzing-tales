import AuthorCard from "@/components/Posts/Author/AuthorCard";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getAllAuthors } from "@/lib/cosmic";

export default async function Creators(): Promise<JSX.Element> {
  const authors = await getAllAuthors();

  return (
    <SectionWrapper>
      <h1>Creators</h1>

      {authors &&
        authors.map((author) => <AuthorCard key={author.id} author={author} />)}
    </SectionWrapper>
  );
}
