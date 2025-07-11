export const metadata = {
  title: "Skills",
  description: "Technical Skills.",
};

export default function Page() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Java, TS/JS, PHP, Java, Python"],
    },
    {
      category: "Frameworks and Libraries",
      skills: ["Laravel, Node.js, NestJS, Next.js, Spring Boot"],
    },
    {
      category: "Tools and Technologies",
      skills: ["Git, Docker, Docker Compose, PostgreSQL, MongoDB, MariaDB"],
    },
    {
      category: "Other Skills",
      skills: ["REST APIs, RabbitMQ, DDD, SOLID, GraphQL, CI/CD, Agile"],
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Skills</h1>

      <div className="space-y-2">
        {skillsData.map((skill, index) => (
          <div>
            <h3 className="font-semibold mb-2">{skill.category}</h3>
            <p className="text-neutral-800 dark:text-neutral-200">
              {skill.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
