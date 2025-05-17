import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            I'm a passionate Software Development Engineer with expertise in building scalable web applications and
            payment solutions. With a strong foundation in computer science and hands-on experience in various
            technologies, I strive to create efficient and user-friendly digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Kalinga Institute of Industrial Technology (KIIT)</h4>
                      <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering</p>
                      <div className="flex justify-between mt-1">
                        <p className="text-sm">2018 - 2022</p>
                        <p className="text-sm font-medium">CGPA: 9.60/10.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Current Role</h3>
                  <div>
                    <h4 className="font-medium">Software Development Engineer at JUSPAY</h4>
                    <p className="text-sm text-muted-foreground">
                      Leading development of Hyperswitch Web SDK and merchant dashboard
                    </p>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm">December 2022 - Present</p>
                    </div>
                    <p className="text-sm mt-2">
                      Working on payment infrastructure, AWS deployments, and frontend optimization
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
