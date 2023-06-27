import { Author } from "@/types/types";
import Image from "next/image";

export default function Avatar({ author }: { author: Author }) {
  return (
    <Image
      src={`${author.metadata.image?.imgix_url}`}
      width={100}
      height={100}
      alt="hello"
      className="h-28 w-28 rounded-full border-2"
    />
  );
}
