export default function Skeleton() {
  return (
    <div className="max-w-sm animate-pulse mx-auto pt-36">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
