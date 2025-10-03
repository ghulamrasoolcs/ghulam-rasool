export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 animate-fade-in">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
          <p>
            Junior PHP/Laravel Developer with full-stack experience in PHP, MySQL, and JavaScript. 
            Skilled in building responsive, scalable web applications with clean code and strong performance.
          </p>
          
          <p>
            I am passionate about creating elegant solutions to complex problems and continuously 
            learning new technologies. My expertise lies in backend development with PHP and Laravel, 
            while also being proficient in frontend technologies to deliver complete web solutions.
          </p>

          <p>
            Eager to contribute technical expertise to dynamic development teams and work on 
            challenging projects that push the boundaries of web development.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">3.60</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
