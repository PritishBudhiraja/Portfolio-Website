import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Wrench } from "lucide-react"

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "Java", "C++"],
  },
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React.js", "React Native", "Next.js", "Rescript", "Recoil", "Redux", "Material UI"],
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "RESTful APIs", "Fast API", "MongoDB", "MySQL", "AWS DynamoDB"],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git",
      "Jira",
      "CI/CD",
      "Responsive Design",
      "Payment Gateway Integration",
      "AWS (S3, CloudFront)",
      "Jenkins",
      "Webpack",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            I've worked with a variety of technologies throughout my career. Here's a comprehensive list of my technical
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <Card key={category.category} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
