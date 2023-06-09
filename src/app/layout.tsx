import { getGlobalData } from "@/lib/cosmic";
import "../styles/globals.css";
import { Inter, Work_Sans, Roboto, Poppins } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Navigation/Footer";

import { ThemeProvider } from "@/utils/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-stone-50 dark:bg-gray-900  min-h-screen w-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          {/* <Footer/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
