import { getAllAuthors, getAllCategories, getAllPosts } from "@/lib/cosmic";
import { headers } from "next/dist/client/components/headers";

export default async function Sitemap() {
  const headersList = headers();
  const domain = headersList.get("host");
  const baseUrl = `https://${domain}`;

  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const authors = await getAllAuthors();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFrequency: "daily",
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "daily",
    })),
    ...authors.map((author) => ({
      url: `${baseUrl}/author/${author.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "daily",
    })),
  ];
}
