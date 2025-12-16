import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Facebook, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/JAIPRAKASH-07", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jai-prakash-b111b2192/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/vistabuzzjp", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/vistabuzzjp", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/17eANHbhQw/", label: "Facebook" },
  { icon: Globe, href: "https://vistabuzz.co.in", label: "Website" }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          I'm always open to discussing new opportunities, interesting projects, or collaborations
        </p>
        
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <Button 
                size="lg" 
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                asChild
              >
                <a href="mailto:sjaiprakash682@gmail.com">
                  <Mail className="w-5 h-5" />
                  sjaiprakash682@gmail.com
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 border-border bg-secondary/30 hover:bg-secondary/50"
                asChild
              >
                <a href="tel:+919587073793">
                  <Phone className="w-5 h-5" />
                  +91 9587073793
                </a>
              </Button>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-6">Find me on social media</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
