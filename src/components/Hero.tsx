import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center animate-fade-in">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hello, my name is</p>
            <h1 className="text-5xl md:text-6xl font-bold font-display">
              <span className="text-foreground">Ghulam</span>{" "}
              <span className="text-primary">Rasool</span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            I'm a{" "}
            <span className="text-primary font-display">
              Junior Software Developer
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            PHP/Laravel & Full-Stack Developer specializing in building secure, scalable, 
            and user-friendly web applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="default"
              className="gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-primary/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:ghulamrasool@example.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ghulam-rasool"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ghulamrasool"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center md:justify-start md:order-first">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Profile image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Ghulam Rasool - Junior Software Developer" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Soft glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};
