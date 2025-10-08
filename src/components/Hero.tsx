import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";
import { useEffect, useState } from "react";

const roles = [
  "Junior Software Developer",
  "PHP/Laravel Developer",
  "Full-Stack Developer",
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-muted-foreground text-lg">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl font-bold font-display">
              Ghulam Rasool
            </h1>
          </div>

          <div className="h-20">
            <h2 className="text-2xl md:text-3xl font-semibold">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary font-display">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Building secure, scalable, and user-friendly web applications with
            expertise in PHP, Laravel, MySQL, and modern JavaScript frameworks.
          </p>

          <div className="pt-4">
            <a
              href="/resume/Ghulam Rasool - Junior Software Developer Resume.pdf"
              download="/resume/Ghulam Rasool - Junior Software Developer Resume.pdf"
            >
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="mailto:ghulamrasoolcs36@gmail.com"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ghulamrasool1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ghulamrasoolcs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Decorative corner borders */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-primary rounded-tr-2xl z-10" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-primary rounded-bl-2xl z-10" />

            {/* Image Card */}
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
              <img
                src={profileImage}
                alt="Ghulam Rasool - Junior Software Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
