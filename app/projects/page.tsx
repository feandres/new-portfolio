import { Projects } from "app/components/projects";

export const metadata = {
  title: "Projects",
  description: "See what I've done and what I'm doing.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <Projects />
    </section>
  );
}
