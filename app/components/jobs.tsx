import Link from "next/link";
import { formatDate, getJobs } from "app/experiences/utils";

export function ExperienceJobs() {
  const allJobs = getJobs();

  return (
    <div>
      {allJobs
        .sort((a, b) => {
          return (
            new Date(b.metadata.endedAt || Date.now()).getTime() -
            new Date(a.metadata.endedAt || Date.now()).getTime()
          );
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block mb-6"
            href={`/experiences/${post.slug}`}
          >
            <div className="w-full flex flex-row flex-wrap gap-2 items-center text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
              {formatDate(post.metadata.startedAt)} -{" "}
              {post.metadata.endedAt
                ? formatDate(post.metadata.endedAt)
                : "Present"}
            </div>
            <div className="text-neutral-900 dark:text-neutral-100 tracking-tight text-base mt-1">
              {post.metadata.title}
            </div>
          </Link>
        ))}
    </div>
  );
}
