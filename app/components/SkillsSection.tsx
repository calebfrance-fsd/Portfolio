const SkillsSection = () => {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MongoDB",
    "WordPress",
    "PHP",
    "GitHub",
  ];

  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">My Skills</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group relative rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative text-center text-xl font-semibold text-white">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
