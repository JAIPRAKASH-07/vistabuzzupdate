import { Github, Linkedin, Twitter, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 text-center max-w-4xl animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="gradient-text">Jai Prakash</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
          Software Engineer & Content Creator
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
          Building scalable web applications with React.js & Node.js, and running the VistaBuzz digital content network
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border bg-secondary/30 hover:bg-secondary/50 backdrop-blur-sm"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border bg-secondary/30 hover:bg-secondary/50 backdrop-blur-sm gap-2"
            asChild
          >
            <a
              href="/Jai_Prakash_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >  Download Resume</a>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/JAIPRAKASH-07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/jai-prakash-b111b2192/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com/vistabuzzjp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="mailto:sjaiprakash682@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;



















