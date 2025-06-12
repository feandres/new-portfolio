import { getBlogPosts } from "app/blog/utils";
import { getJobs } from "app/experiences/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

export default async function sitemap() {
  // Map blog posts to sitemap entries
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Map job posts to sitemap entries
  let jobs = getJobs().map((job) => ({
    url: `${baseUrl}/experiences/${job.slug}`,
    lastModified: job.metadata.startedAt, // or endedAt, depending on your preference
  }));

  // Define static routes, including /experiences
  let routes = ["", "/blog", "/experiences"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Combine all routes
  return [...routes, ...blogs, ...jobs];
}
