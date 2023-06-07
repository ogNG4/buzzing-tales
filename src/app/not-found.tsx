import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-[12rem]">404</h1>

      <Link href="/">
        <span>Back</span>
      </Link>
    </div>
  );
}
