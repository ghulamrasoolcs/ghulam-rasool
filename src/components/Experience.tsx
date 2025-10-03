import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "FRDP",
    period: "Jan 2024 – Present",
    description: "Built scalable MIS in Laravel with HR, Finance, and Operational modules. Implemented secure role-based permissions and automated reporting.",
    current: true,
  },
  {
    title: "Web Developer / Computer Supervisor",
    company: "Chiniot Islamia Public School & College",
    period: "Nov 2023 – Jan 2024",
    description: "Managed and improved the school's website functionality and user experience.",
    current: false,
  },
  {
    title: "PHP Intern",
    company: "DueClix.com",
    period: "Sep 2023 – Oct 2023",
    description: "Contributed to real-time PHP projects under senior developer supervision.",
    current: false,
  },
  {
    title: "PHP Intern",
    company: "Hidaya Institute",
    period: "Feb 2023 – May 2023",
    description: "Developed web applications using PHP, OOP, MySQL, AJAX, and Bootstrap.",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 animate-fade-in">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-6 w-4 h-4 rounded-full border-2 ${
                exp.current ? 'bg-primary border-primary animate-glow' : 'bg-background border-border'
              }`} />

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="text-primary font-medium mb-1">{exp.company}</div>
                    <div className="text-sm text-muted-foreground mb-3">{exp.period}</div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
