export const metadata = {
  title: "Habilidades Técnicas",
  description: "Minhas competências técnicas e ferramentas dominadas.",
};

export default function Page() {
  const skillsData = [
    {
      category: "Linguagens de Programação",
      skills: "JavaScript, TypeScript, PHP, Java",
    },
    {
      category: "Frameworks e Bibliotecas",
      skills: "React, Next.js, Node.js, NestJS, Express, Laravel",
    },
    {
      category: "Ferramentas e Tecnologias",
      skills: "Git, Docker, PostgreSQL, MongoDB, MariaDB",
    },
    {
      category: "Outras Competências",
      skills: "REST APIs, RabbitMQ, DDD, SOLID, GraphQL, CI/CD, Agile",
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
