import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Code,
  Database,
  Globe,
  Server,
  GraduationCap,
  MapPin,
  CalendarDays,
  Phone,
} from "lucide-react"
import {projects} from "./projects.js"
import {skills} from "./skills.jsx"
import { experience } from "./experience.js"
import { SiLinkedin, SiGithub, SiGmail, SiInstagram, SiWhatsapp, SiFiles} from "react-icons/si"
import { educationData } from "./education.js"
import { FiFileText } from "react-icons/fi"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primary">Akash</h1>
      
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {["home", "about", "skills", "projects", "experience","education", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize hover:text-primary transition-colors cursor-pointer ${
                        activeSection === section ? "text-primary font-bold" : "text-primary"
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </nav>
      
                <div className="flex items-center space-x-4 ">
                  <Button className="cursor-pointer" variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
                    {isDark ? <Sun className="w-5 h-5 " /> : <Moon className="w-5 h-5" />}
                  </Button>
      
                  {/* Mobile Menu Button */}
                  <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </Button>
                </div>
              </div>
      
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden bg-background border-t">
                  <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {["home", "about", "skills", "projects", "experience","education", "contact"].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`capitalize text-left hover:text-primary transition-colors ${
                          activeSection === section ? "text-primary font-medium" : ""
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Akash Gavde
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">MERN Stack Developer</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web applications that solve real-world problems. I love
            turning ideas into reality through clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <img
                  src="..\src\assets\image.jpg"
                  alt="Profile"
                  className="w-80 h-80 rounded-full object-cover shadow-lg "
                />
                <div className="absolute inset-0 rounded-full  from-black/70  to-transparent"></div>
                
              </div>
            </div>
            <div className="animate-fade-in">
              <p className="text-lg mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with a fresh perspective on web development. After transitioning
                from a non-tech background, I've dedicated myself to mastering modern web technologies and creating
                impactful digital experiences.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                My journey into tech has been driven by curiosity and a love for problem-solving. I enjoy working with
                both frontend and backend technologies, always striving to write clean, efficient code that makes a
                difference.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my learning journey with the developer community.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">{skill.icon}</div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {
                      project?.disable == 'true' ? (
                       <></>
                      ):(
                        <>
                        <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button></>
                      )
                    }
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8 animate-fade-in">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                  <Badge variant={exp.type === "tech" ? "secondary" : "default"} className="mt-3">
                    {exp.type === "tech" ? "Tech" : "Non-Tech"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="education" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background that shaped my expertise
          </p>
        </div>

        <div className="space-y-6 animate-fade-in">
          {educationData.map((edu) => (
            <Card key={edu.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 ">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold">
                      {edu.degree} {edu.field && `in ${edu?.field}`} 
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">{edu.institution}</CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                      {edu.gpa && (
                        <Badge variant="secondary" className="font-medium">
                          GPA: {edu.gpa}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {edu.description && <p className="text-muted-foreground leading-relaxed">{edu.description}</p>}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Achievements & Honors
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Relevant Coursework
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, index) => (
                        <div key={index} className="text-sm text-muted-foreground">
                          • {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
  <div className="container mx-auto max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Let's Connect</CardTitle>
        <CardDescription>
          I'm currently looking for new opportunities. Feel free to reach out via any of these methods.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <SiGmail className="w-6 h-6" />
            <a href="mailto:agavde404@gmail.com" className="hover:underline">
              agavde404@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <SiWhatsapp className="w-6 h-6" />
            <a href="https://wa.me/+917043496195" target="_blank" rel="noopener noreferrer" className="hover:underline">
              +91 70434 96195
            </a>
          </div>
          {/* <div className="flex items-center gap-4">
            <SiLinkedin className="w-6 h-6" />
            <a href="https://www.linkedin.com/in/akash-gavde-70b0b02a5/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Akash Gavde
            </a>
          </div>
          <div className="flex items-center gap-4">
            <SiInstagram className="w-6 h-6" />
            <a href="https://github.com/Akkyyyyyyy/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Akk.yy_
            </a>
          </div> */}
        </div>
      </CardContent>
    </Card>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Akash Gavde</h3>
              <p className="text-muted-foreground">MERN Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Akkyyyyyyy/" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/akash-gavde-70b0b02a5/" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:john@example.com" target="_blank" rel="noopener noreferrer">
                  <SiGmail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/akk.yy_" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Akky. All rights reserved.</p>
          </div>
        </div>
      </footer>
{/* Floating WhatsApp Button */}
<div className="fixed bottom-6 right-6 z-50">
  <a
    href="https://wa.me/+917043496195"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    aria-label="Chat on WhatsApp"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="28" 
      height="28" 
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
</div>
    </div>
  )
}
