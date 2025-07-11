import { ExperienceJobs } from "app/components/jobs";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Felipe Andrès - Software Developer
      </h1>
      <p className="mb-4">
        {`Hello there, I'm Felipe Andres, a Backend Software Engineer based in Brazil. I specialize in building scalable web systems, focusing on microservices architecture, secure authentication, and distributed communication using TypeScript.`}
      </p>
      <p className="mb-4">
        {`I’ve worked for years on public health systems, serving hundreds of municipalities and thousands of users, transforming legacy monoliths into clean, maintainable service-based architectures. My goal is to write reliable code, adhering to SOLID principles, applying clean architecture, and ensuring full stack observability.`}
      </p>
      <p className="mb-4">
        {` I started coding in college, inspired by my late father, and I aim to honor his memory through a creative, efficiency-driven career. I’m always sharpening my skills, staying open to new ideas, and delivering well-engineered systems.`}
      </p>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        Experiences
      </h2>
      <div className="my-8">
        <ExperienceJobs />
      </div>
    </section>
  );
}
