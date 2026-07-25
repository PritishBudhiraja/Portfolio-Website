"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, Wrench } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionLabel } from "@/components/ui/section-label"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"

const skillIcons: Record<string, string> = {
  "TypeScript": "https://cdn.simpleicons.org/typescript",
  "JavaScript": "https://cdn.simpleicons.org/javascript",
  "ReScript": "https://cdn.simpleicons.org/rescript",
  "Python": "https://cdn.simpleicons.org/python",
  "SQL": "https://cdn.simpleicons.org/postgresql",
  "React": "https://cdn.simpleicons.org/react",
  "Docker": "https://cdn.simpleicons.org/docker",
  "Kubernetes": "https://cdn.simpleicons.org/kubernetes",
  "CI/CD (Jenkins)": "https://cdn.simpleicons.org/jenkins",
  "AWS (S3/CloudFront)": "https://cdn.simpleicons.org/amazonaws",
  "Vite": "https://cdn.simpleicons.org/vite",
  "Webpack": "https://cdn.simpleicons.org/webpack",
  "GitHub Actions": "https://cdn.simpleicons.org/githubactions",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  "FastAPI": "https://cdn.simpleicons.org/fastapi",
  "MongoDB": "https://cdn.simpleicons.org/mongodb",
  "MySQL": "https://cdn.simpleicons.org/mysql",
  "DynamoDB": "https://cdn.simpleicons.org/amazondynamodb",
}

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    skills: ["TypeScript", "JavaScript", "ReScript", "Python", "SQL"],
  },
  {
    category: "Frontend Engineering",
    icon: Globe,
    skills: ["React", "Component Architecture", "State Management", "Bundle Optimization", "Performance Optimization"],
  },
  {
    category: "Infra & Delivery",
    icon: Wrench,
    skills: ["Docker", "Kubernetes", "CI/CD (Jenkins)", "AWS (S3/CloudFront)", "Vite", "Webpack", "GitHub Actions"],
  },
  {
    category: "Backend & Data",
    icon: Database,
    skills: ["Node.js", "REST APIs", "FastAPI", "MongoDB", "MySQL", "DynamoDB"],
  },
]

interface SkillBadgeProps {
  skill: string
  index: number
  categoryIndex: number
  isInView: boolean
}

function SkillBadge({ skill, index, categoryIndex, isInView }: SkillBadgeProps) {
  const iconUrl = skillIcons[skill]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.8 }
      }
      transition={{
        duration: 0.4,
        delay: categoryIndex * 0.1 + index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-lg hover:bg-primary/10 transition-colors duration-300 cursor-default"
    >
      {iconUrl && (
        <img 
          src={iconUrl} 
          alt={skill} 
          className="w-4 h-4"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <span className="text-sm font-medium">{skill}</span>
    </motion.div>
  )
}

interface SkillBadgesProps {
  skills: string[]
  categoryIndex: number
}

function SkillBadges({ skills, categoryIndex }: SkillBadgesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge
          key={skill}
          skill={skill}
          index={index}
          categoryIndex={categoryIndex}
          isInView={isInView}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <SectionLabel>Technical Expertise</SectionLabel>
          <FadeIn>
            <h2 className="text-section font-display font-bold mb-6 text-center">Skills & Technologies</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-center max-w-3xl text-muted-foreground leading-relaxed">
              I've worked with a variety of technologies throughout my career. Here's a comprehensive list of my technical
              skills.
            </p>
          </FadeIn>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, index) => (
            <BentoCard 
              key={category.category} 
              index={index}
              colSpan={index === 0 || index === 3 ? 2 : 1}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="bg-primary/10 p-4 rounded-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <category.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold">{category.category}</h3>
              </div>
              <SkillBadges skills={category.skills} categoryIndex={index} />
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
