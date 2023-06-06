import Image from "next/image";

export default function HomePageHero(): JSX.Element {
  return (
    <>
      <div className="mx-auto mt-20 w-full max-w-3xl flex-col flex items-center text-center space-y-16 px-4 lg:px-0  ">
        <h1 className="text-6xl lg:text-7xl font-bold text-zinc-700 dark:text-zinc-200">
          A simple blog about our
          <span className="text-amber-400"> little buzzing friends</span>
        </h1>
        <div className="animate-pulse">
          <Image src="/bee.svg" width={300} height={100} alt="Bee" />
        </div>
      </div>
    </>
  );
}
