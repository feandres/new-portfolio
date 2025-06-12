"use client";

import React from "react";
import clsx from "clsx";

type SkillsScrollerProps = {
  skills: string[];
  duration?: number; // seconds
  className?: string;
};

export function SkillsScroller({
  skills,
  duration = 20,
  className,
}: SkillsScrollerProps) {
  const animationDuration = `${duration}s`;

  return (
    <div
      className={clsx(
        "relative flex w-full overflow-hidden mask-fade",
        className,
      )}
      style={{ ["--t" as any]: animationDuration }}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={clsx(
            "whitespace-nowrap animate-scroll",
            i === 1 && "animate-scroll2",
          )}
        >
          {skills.map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="inline-flex m-2 px-4 py-1 rounded-md text-sm tracking-widest uppercase bg-neutral-800 text-white hover:bg-pink-600 transition-colors cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
