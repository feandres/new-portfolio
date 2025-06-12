export const metadata = {
  title: "Formação Acadêmica",
  description: "Minha trajetória educacional.",
};

export default function Page() {
  const educationData = [
    {
      course: "Bacharelado em Ciências da Computação",
      institution: "Universidade Federal do Maranhão",
      period: "2020 - Present",
      description:
        "Formação completa em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Education
      </h1>

      <div className="space-y-8">
        {educationData.map((education, index) => (
          <div
            key={index}
            className="border-b border-neutral-200 dark:border-neutral-800 pb-8 last:border-0"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-medium">{education.course}</h2>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 ml-4 flex-shrink-0">
                {education.period}
              </span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 mb-3">
              {education.institution}
            </p>

            <p className="text-neutral-800 dark:text-neutral-200">
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
