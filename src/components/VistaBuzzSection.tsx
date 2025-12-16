import { Youtube, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import vistabuzzMain from "@/assets/vistabuzz-main.png";
import vistabuzzTech from "@/assets/vistabuzztech.jpg";
import vistabuzzComedy from "@/assets/vistabuzzcomedy.png";
import vistabuzzFacts from "@/assets/vistabuzzfacts.png";

const channels = [
  {
    name: "VistaBuzz JP",
    tagline: "Main Umbrella Brand",
    description: "The core platform bringing together major updates, trending topics, and cross-channel content.",
    image: vistabuzzMain,
    youtube: "https://www.youtube.com/@vistabuzzjp",
    color: "from-blue-500/20 to-slate-500/20"
  },
  {
    name: "VistaBuzz Tech",
    tagline: "Technology & Developer Hub",
    description: "Coding tutorials, software development guidance, AI tools, and technology reviews.",
    image: vistabuzzTech,
    youtube: "https://www.youtube.com/@vistabuzztech",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    name: "VistaBuzz Comedy",
    tagline: "Entertainment & Fun",
    description: "Short comedy videos, entertaining skits, and humorous content for daily entertainment.",
    image: vistabuzzComedy,
    youtube: "https://www.youtube.com/@vistabuzzcomedy",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "VistaBuzz Facts",
    tagline: "Knowledge & Information",
    description: "Quick facts, trending information, and educational snippets in engaging format.",
    image: vistabuzzFacts,
    youtube: "https://www.youtube.com/@vistabuzzfacts",
    color: "from-yellow-400/20 to-orange-500/20"
  }
];

const VistaBuzzSection = () => {
  return (
    <section id="vistabuzz" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">VistaBuzz</span> Network
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Building a trusted digital content ecosystem that educates, entertains, and empowers audiences
          </p>
          
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {channels.map((channel) => (
            <Card 
              key={channel.name}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              <div className={`relative h-48 bg-gradient-to-br ${channel.color} flex items-center justify-center p-6`}>
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{channel.name}</h3>
                    <p className="text-sm text-primary font-medium">{channel.tagline}</p>
                  </div>
                  <a 
                    href={channel.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-foreground transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-foreground/80 text-sm">{channel.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VistaBuzzSection;


















