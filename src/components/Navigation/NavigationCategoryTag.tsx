import { Category } from "@/types/types";
import Link from "next/link";

export default function NavigationCategoryTag({
  category,
}: {
  category: Category;
}) {
  return (
    <Link href={`/category/${category?.slug}`}>
      <div className=" w-max px-2 text-lg font-bold rounded-lg border-2 bg-amber-300 text-zinc-700 border-amber-300 dark:bg-transparent dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-300 dark:hover:text-zinc-700   ">
        {category?.title}
      </div>
    </Link>
  );
}
