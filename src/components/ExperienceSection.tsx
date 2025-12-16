import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "AFORV Private Limited",
    location: "Bengaluru",
    period: "Aug 2024 – Present",
    current: true,
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
    description: [
      "Developing and maintaining web applications using React.js and modern UI frameworks",
      "Collaborating with cross-functional teams to improve UX and application performance",
      "Writing scalable, maintainable, and secure frontend code"
    ]
  },
  {
    title: "Frontend Developer Intern",
    company: "Podbic Institute",
    location: "Bengaluru",
    period: "Jan 2023 – Jun 2024",
    current: false,
    tech: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    description: [
      "Built responsive UI components using modern frontend technologies",
      "Worked on API integration and basic state management",
      "Improved performance and UI consistency across devices"
    ]
  },
  {
    title: "SDET Intern",
    company: "QSpiders",
    location: "Gurugram",
    period: "Jul 2022 – Dec 2022",
    current: false,
    tech: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Manual Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ],
    description: [
      "Executed manual and automated test cases to ensure product quality",
      "Performed API testing and defect tracking",
      "Prepared test reports and collaborated with development teams"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and quality assurance
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto text-left' : 'md:pl-12 text-left'}`}
            >
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${exp.current ? 'bg-primary border-primary/30' : 'bg-secondary border-border'}`}
              />

              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {exp.current && (
                    <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full font-medium">
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>

                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {exp.tech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-2 py-1 rounded-md bg-secondary/40 hover:bg-primary/10 transition"
                      title={tech.name}
                    >
                      <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-foreground/80">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
