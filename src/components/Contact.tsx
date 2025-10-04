import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ghulamrasoolcs36@gmail.com",
    href: "mailto:ghulamrasoolcs36@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 348 0327686",
    href: "https://wa.me/923480327686",
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
    value: "linkedin.com/in/ghulamrasool1",
    href: "https://linkedin.com/in/ghulamrasool1",
    iconOnly: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ghulamrasoolcs",
    href: "https://github.com/ghulamrasoolcs",
    iconOnly: true,
  },
];

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const templateParams = {
        fullName: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        'service_gi0lh2p',
        'template_96rcn9v',
        templateParams,
        '7ALHT_V5712TM8RiH'
      );

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send message", {
        description: "Please try again or contact me directly via email.",
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 animate-fade-in text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="order-2 lg:order-1 grid grid-cols-1 gap-6 content-start">
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
                    {!item.iconOnly && (
                      <>
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
                      </>
                    )}
                    {item.iconOnly && item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-medium hover:text-primary transition-colors"
                        aria-label={`Visit my ${item.label} profile`}
                      >
                        <span className="text-sm">Visit Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project Inquiry"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="bg-background border-border focus:border-primary min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={form.formState.isSubmitting}
                  >
                    <Send className="h-5 w-5" />
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ghulam Rasool. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};
