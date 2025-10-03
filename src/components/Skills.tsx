const skillCategories = [
  {
    title: "Programming & Backend",
    skills: ["PHP (Core & OOP)", "Laravel", "REST APIs", "Node.js"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "AJAX"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Database Design", "Data Modeling", "Query Optimization"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Leadership", "Communication"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 animate-fade-in">
          Skills & <span className="text-primary">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-muted hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
