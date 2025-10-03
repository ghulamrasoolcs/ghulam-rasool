import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Systems Engineering",
    institution: "Mehran University of Engineering & Technology",
    period: "2018 – 2022",
    gpa: "CGPA 3.60",
  },
  {
    degree: "Intermediate in Pre-Engineering",
    institution: "National School & College Badin",
    period: "2016 – 2018",
    gpa: "",
  },
];

const certificates = [
  {
    title: "Software Development Training",
    date: "May 2023",
  },
  {
    title: "NFTP Technical Course",
    date: "March 2022",
  },
  {
    title: "CIT Certificate",
    date: "April 2018",
  },
  {
    title: "Web Development Trainee",
    organization: "CIRCLE Women (TechKaro)",
    date: "",
  },
];

export const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 animate-fade-in">
          Education & <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                <div className="text-primary font-medium mb-1">{edu.institution}</div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  {edu.gpa && <span className="font-medium text-primary">{edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certificates
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  {cert.organization && (
                    <div className="text-sm text-primary mb-1">{cert.organization}</div>
                  )}
                  {cert.date && (
                    <div className="text-sm text-muted-foreground">{cert.date}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
