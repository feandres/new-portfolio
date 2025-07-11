export const metadata = {
  title: "Education",
  description: "Academic Trail.",
};

export default function Page() {
  const educationData = [
    {
      course: "Bachelor in Computer Science",
      institution: "Universidade Federal do Maranhão",
      period: "June, 2019 - December, 2025",
      description:
        "Relevant Fields: Algorithms, Data Structures, Software Architecture, Databases, Object-Oriented Programming, Software Engineering",
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

            <a
              href="https://portalpadrao.ufma.br/"
              className="text-neutral-600 dark:text-neutral-400 mb-3"
            >
              {education.institution}
            </a>

            <p className="text-neutral-800 dark:text-neutral-200">
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
