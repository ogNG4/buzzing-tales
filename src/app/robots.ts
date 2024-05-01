import { headers } from "next/dist/client/components/headers";

export default function robots() {
  const headersList = headers();
  const domain = headersList.get("host");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `https://${domain}/sitemap.xml`,
  };
}
