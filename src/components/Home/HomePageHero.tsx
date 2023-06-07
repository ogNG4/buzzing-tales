import Image from "next/image";

export default function HomePageHero(): JSX.Element {
  return (
    <>
      <div className=" mx-auto mt-20 mb-15 w-full max-w-3xl flex-col flex items-center  text-center space-y-16 px-4 xl:flex-row xl:items-center xl:px-0 xl:max-w-6xl xl:justify-center xl:space-y-0 ">
        <h1 className="text-4xl lg:text-7xl font-bold text-zinc-700 dark:text-zinc-200 tracking-widest leading-snug lg:leading-snug xl:w-3/5">
          An easygoing blog about our
          <span className="text-amber-400"> little buzzzzing friends</span>.
        </h1>
        <div className="animate-pulse">
          <Image src="/bee.svg" width={320} height={100} alt="Bee" />
        </div>
      </div>
    </>
  );
}
