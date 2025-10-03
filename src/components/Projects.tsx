import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "EEG-based Human Emotions Identification",
    description: "Deep Learning project achieving 85% accuracy using LSTM, CNN, and SVM models for emotion recognition from EEG signals.",
    tags: ["Deep Learning", "LSTM", "CNN", "Python"],
  },
  {
    title: "Online Blogging Application",
    description: "Full-featured blogging platform with CRUD operations, user authentication, and responsive UI design.",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "Group Chat Application",
    description: "Real-time chat application with live messaging capabilities using PHP, AJAX, and MySQL database.",
    tags: ["PHP", "AJAX", "MySQL", "JavaScript"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 animate-fade-in">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 flex-1 border-primary/50 hover:bg-primary/10"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 flex-1 border-primary/50 hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
