import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getJobs } from "app/experiences/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let posts = getJobs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getJobs().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    startedAt: startedAt,
    endedAt: endedAt,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      startedAt,
      endedAt,
      url: `${baseUrl}/experiences/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getJobs().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            dateStarted: post.metadata.startedAt,
            dateEnded: post.metadata.endedAt,
            dateModified: post.metadata.startedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/experiences/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.startedAt, false)} -{" "}
          {post.metadata.endedAt
            ? formatDate(post.metadata.endedAt, false)
            : "Present"}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
