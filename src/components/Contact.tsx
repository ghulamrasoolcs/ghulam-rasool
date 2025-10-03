import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ghulamrasool@example.com",
    href: "mailto:ghulamrasool@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 XXX XXXXXXX",
    href: "tel:+92XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ghulam-rasool",
    href: "https://linkedin.com/in/ghulam-rasool",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ghulamrasool",
    href: "https://github.com/ghulamrasool",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 animate-fade-in text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium hover:text-primary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="mailto:ghulamrasool@example.com">
              <Mail className="h-5 w-5" />
              Send Me an Email
            </a>
          </Button>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Ghulam Rasool. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
};
