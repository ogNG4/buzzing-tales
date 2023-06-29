import { Author } from "@/types/types";
import Image from "next/image";

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md mt-20  w-5/6 xl:w-1/3 min-h-[5rem] relative dark:text-white flex-col basis-end p-4 shadow-lg">
      <Image
        src={`${author.metadata.image?.imgix_url}`}
        width={100}
        height={100}
        alt="hello"
        placeholder="blur"
        blurDataURL={`${author.metadata.image?.imgix_url}`}
        className="h-32 w-32 rounded-full border-8 border-gray-100 dark:border-gray-900 m-auto absolute top-[-4rem] left-0 right-0 ml-auto mr-auto "
      />
      <div className="mt-20 w-full flex-col flex items-center gap-5">
        <span className="w-max text-3xl xl:text-4xl font-bold">
          {author.title}
        </span>
        <span className="text-lg text-center max-w-[35rem] text-gray-500 dark:text-gray-300">
          {author.metadata.description}
        </span>
      </div>
    </div>
  );
}
