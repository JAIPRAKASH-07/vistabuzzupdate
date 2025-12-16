import { ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Learning Management System (LMS)",
    company: "AFORV",
    duration: "Aug 2025 – Present",
    description:
      "Currently working on a Learning Management System (LMS) to manage online classes, study notes, and learning resources. Contributing to MERN stack development with role-based access for students, instructors, and administrators.",
    skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Role-Based Access"],
    highlight: true,
    highlightType: "primary"
  },
  {
    title: "Route Tracking System (HPCL)",
    company: "AFORV",
    duration: "Jan 2025 – Aug 2025",
    description:
      "Contributed to the Route Tracking project for HPCL to improve operational efficiency and logistics monitoring with real-time route and vehicle tracking.",
    skills: ["Manual Testing", "MS Excel", "Real-time Tracking"],
   
  },
  {
    title: "Hospital Management System",
    company: "AFORV",
    duration: "Dec 2024 – Mar 2025",
    description:
      "Developed a comprehensive Hospital Management System to automate and streamline hospital operations with modules for patient management and appointments.",
    skills: ["React.js", "TypeScript", "RESTful APIs", "UI/UX Design"]
  },
  {
    title: "Distributed Management System (DMS)",
    company: "AFORV",
    duration: "Mar 2024 – Jan 2025",
    description:
      "Worked on a tracking-based Distributed Management System for monitoring devices, personnel, and assets with dashboards and management pages.",
    skills: ["React.js", "JavaScript", "Dashboard Design"]
  },
  {
    title: "Zoho CRM Project",
    company: "QSpiders",
    duration: "Dec 2022 – Jan 2024",
    description:
      "Contributed to a CRM solution with features including customer management, sales pipeline tracking, analytics, and role-based access control.",
    skills: ["Manual Testing", "SQL", "Test Planning"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications I've contributed to, solving complex business problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`bg-card border-border transition-all duration-300 hover:shadow-xl group
                ${project.highlight ? "md:col-span-2 relative overflow-hidden" : ""}
                ${project.highlightType === "primary" ? "border-primary/60" : ""}
                ${project.highlightType === "secondary" ? "border-accent/60" : ""}
              `}
            >
              {/* Highlight Glow */}
              {project.highlight && project.highlightType === "primary" && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
              )}

              {project.highlight && project.highlightType === "secondary" && (
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
              )}

              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                      {project.company}
                    </Badge>

                    {project.highlightType === "primary" && (
                      <Badge className="bg-primary text-primary-foreground border-0">
                        Current Project
                      </Badge>
                    )}

                    {project.highlightType === "secondary" && (
                      <Badge className="bg-accent text-accent-foreground border-0">
                        Enterprise Project
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.duration}
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-foreground/80 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-secondary/50 rounded-full text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
