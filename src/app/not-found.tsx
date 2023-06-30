import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-col h-[100vh] flex items-center justify-center ">
      <h1 className="text-[12rem]">404</h1>

      <Link href="/">
        <span className="bg-amber-300 hover:bg-amber-400 px-2 py-1 rounded-md shadow-md text-white text-2xl font-bold ">
          Back
        </span>
      </Link>
    </div>
  );
}
