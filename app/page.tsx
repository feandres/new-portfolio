import { ExperienceJobs } from "app/components/jobs";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Felipe Andrès - Software Developer
      </h1>
      <p className="mb-4">
        {`Aqui vai um texto introdutório sobre mim, o que eu faço e onde quero chegar, yada yada yada vou falando e falando`}
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
