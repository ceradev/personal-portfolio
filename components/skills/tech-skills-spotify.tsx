"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Play, Clock, PlusCircle } from "lucide-react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJenkins,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si"

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ReactNode
  color: string
  description?: string
  duration?: string
}

export function TechSkillsSpotify() {
  const [activeTab, setActiveTab] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Record<string, Skill[]> = {
    frontend: [
      {
        name: "HTML5",
        level: 95,
        category: "frontend",
        icon: <FaHtml5 className="h-8 w-8" />,
        color: "text-orange-500",
        description: "Estructura semántica, accesibilidad, formularios avanzados",
        duration: "3:45",
      },
      {
        name: "CSS3/SCSS",
        level: 90,
        category: "frontend",
        icon: <FaCss3Alt className="h-8 w-8" />,
        color: "text-blue-500",
        description: "Flexbox, Grid, animaciones, responsive design",
        duration: "3:20",
      },
      {
        name: "JavaScript",
        level: 92,
        category: "frontend",
        icon: <FaJs className="h-8 w-8" />,
        color: "text-yellow-400",
        description: "ES6+, asincronía, DOM manipulation, Web APIs",
        duration: "4:10",
      },
      {
        name: "TypeScript",
        level: 88,
        category: "frontend",
        icon: <SiTypescript className="h-8 w-8" />,
        color: "text-blue-600",
        description: "Types, interfaces, generics, decorators",
        duration: "3:55",
      },
      {
        name: "React",
        level: 90,
        category: "frontend",
        icon: <FaReact className="h-8 w-8" />,
        color: "text-cyan-400",
        description: "Hooks, Context API, custom hooks, performance",
        duration: "4:25",
      },
      {
        name: "Next.js",
        level: 85,
        category: "frontend",
        icon: <SiNextdotjs className="h-8 w-8" />,
        color: "text-foreground",
        description: "App Router, Server Components, SSR, ISR",
        duration: "3:50",
      },
      {
        name: "Angular",
        level: 80,
        category: "frontend",
        icon: <FaAngular className="h-8 w-8" />,
        color: "text-red-600",
        description: "Components, services, RxJS, NgRx",
        duration: "3:30",
      },
      {
        name: "Vue.js",
        level: 75,
        category: "frontend",
        icon: <FaVuejs className="h-8 w-8" />,
        color: "text-green-500",
        description: "Composition API, Vuex, Vue Router",
        duration: "3:15",
      },
      {
        name: "Tailwind CSS",
        level: 88,
        category: "frontend",
        icon: <SiTailwindcss className="h-8 w-8" />,
        color: "text-cyan-400",
        description: "Utility-first, responsive design, customization",
        duration: "3:40",
      },
      {
        name: "Framer Motion",
        level: 82,
        category: "frontend",
        icon: <SiFramer className="h-8 w-8" />,
        color: "text-purple-500",
        description: "Animations, transitions, gestures, variants",
        duration: "3:25",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 85,
        category: "backend",
        icon: <FaNodeJs className="h-8 w-8" />,
        color: "text-green-500",
        description: "Event loop, streams, async patterns",
        duration: "3:55",
      },
      {
        name: "Express",
        level: 82,
        category: "backend",
        icon: <SiExpress className="h-8 w-8" />,
        color: "text-muted-foreground",
        description: "Middleware, routing, error handling",
        duration: "3:40",
      },
      {
        name: "NestJS",
        level: 78,
        category: "backend",
        icon: <SiNestjs className="h-8 w-8" />,
        color: "text-red-600",
        description: "Modules, controllers, providers, guards",
        duration: "3:30",
      },
      {
        name: "Spring Boot",
        level: 70,
        category: "backend",
        icon: <SiSpringboot className="h-8 w-8" />,
        color: "text-green-600",
        description: "MVC, JPA, security, microservices",
        duration: "3:15",
      },
      {
        name: "REST API Design",
        level: 88,
        category: "backend",
        icon: <FaNodeJs className="h-8 w-8" />,
        color: "text-blue-500",
        description: "RESTful principles, versioning, documentation",
        duration: "4:00",
      },
      {
        name: "GraphQL",
        level: 75,
        category: "backend",
        icon: <SiGraphql className="h-8 w-8" />,
        color: "text-pink-600",
        description: "Schemas, resolvers, Apollo Server",
        duration: "3:25",
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        level: 83,
        category: "database",
        icon: <SiPostgresql className="h-8 w-8" />,
        color: "text-blue-500",
        description: "Relational design, indexing, performance",
        duration: "3:45",
      },
      {
        name: "MongoDB",
        level: 80,
        category: "database",
        icon: <SiMongodb className="h-8 w-8" />,
        color: "text-green-500",
        description: "Document design, aggregation, indexing",
        duration: "3:35",
      },
      {
        name: "Redis",
        level: 75,
        category: "database",
        icon: <SiRedis className="h-8 w-8" />,
        color: "text-red-500",
        description: "Caching, pub/sub, data structures",
        duration: "3:20",
      },
      {
        name: "Firebase",
        level: 78,
        category: "database",
        icon: <SiFirebase className="h-8 w-8" />,
        color: "text-yellow-500",
        description: "Firestore, authentication, cloud functions",
        duration: "3:30",
      },
      {
        name: "SQL",
        level: 85,
        category: "database",
        icon: <FaDatabase className="h-8 w-8" />,
        color: "text-blue-400",
        description: "Queries, joins, transactions, optimization",
        duration: "3:50",
      },
    ],
    devops: [
      {
        name: "Git",
        level: 90,
        category: "devops",
        icon: <FaGitAlt className="h-8 w-8" />,
        color: "text-orange-600",
        description: "Branching, merging, rebasing, workflows",
        duration: "4:00",
      },
      {
        name: "GitHub Actions",
        level: 82,
        category: "devops",
        icon: <SiGithubactions className="h-8 w-8" />,
        color: "text-blue-500",
        description: "CI/CD pipelines, workflows, secrets",
        duration: "3:40",
      },
      {
        name: "Docker",
        level: 78,
        category: "devops",
        icon: <FaDocker className="h-8 w-8" />,
        color: "text-blue-400",
        description: "Containerization, multi-stage builds, compose",
        duration: "3:30",
      },
      {
        name: "Kubernetes",
        level: 65,
        category: "devops",
        icon: <SiKubernetes className="h-8 w-8" />,
        color: "text-blue-600",
        description: "Pods, deployments, services, helm",
        duration: "3:00",
      },
      {
        name: "AWS",
        level: 75,
        category: "devops",
        icon: <FaAws className="h-8 w-8" />,
        color: "text-yellow-500",
        description: "EC2, S3, Lambda, CloudFormation",
        duration: "3:25",
      },
      {
        name: "Jenkins",
        level: 70,
        category: "devops",
        icon: <FaJenkins className="h-8 w-8" />,
        color: "text-red-500",
        description: "Pipelines, jobs, agents, plugins",
        duration: "3:15",
      },
    ],
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Spotify-inspired header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-primary/40 rounded-lg flex items-center justify-center shadow-lg">
            <Play className="h-8 w-8 text-white fill-current ml-1" />
          </div>
          <div>
            <h3 className="text-sm text-neutral-400 uppercase font-medium">Playlist</h3>
            <h2 className="text-2xl font-bold text-white">Tech Skills</h2>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-1 mb-6">
          <TabsTrigger
            value="frontend"
            className="data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm text-neutral-400"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm text-neutral-400"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            value="database"
            className="data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm text-neutral-400"
          >
            Database
          </TabsTrigger>
          <TabsTrigger
            value="devops"
            className="data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm text-neutral-400"
          >
            DevOps
          </TabsTrigger>
        </TabsList>

        {/* Table header */}
        <div className="grid grid-cols-12 px-4 py-2 border-b border-neutral-800 text-sm text-neutral-400">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">NOMBRE</div>
          <div className="col-span-4">NIVEL</div>
          <div className="col-span-2 flex justify-end items-center">
            <Clock className="h-4 w-4" />
          </div>
        </div>

        {/* Skills content */}
        {Object.keys(skills).map((category) => (
          <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-1">
                  {skills[category].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: false, margin: "-50px" }}
                      className={`grid grid-cols-12 items-center p-3 rounded-md ${
                        hoveredSkill === skill.name ? "bg-neutral-800/80" : "bg-neutral-900/40 hover:bg-neutral-800/60"
                      } transition-colors duration-200 group cursor-default`}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Number */}
                      <div className="col-span-1 text-center text-neutral-400 group-hover:text-white">
                        <div className="relative">
                          <span className="group-hover:opacity-0 transition-opacity">{index + 1}</span>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                      </div>

                      {/* Skill name and icon */}
                      <div className="col-span-5 flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-md flex items-center justify-center ${skill.color} bg-neutral-800/50`}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{skill.name}</h4>
                          <p className="text-sm text-neutral-400">{skill.description}</p>
                        </div>
                      </div>

                      {/* Skill level */}
                      <div className="col-span-4">
                        <div className="flex flex-col gap-1">
                          <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary/80 to-primary/60"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: false, margin: "-50px" }}
                            />
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-neutral-400">Nivel</span>
                            <span className="text-white font-medium">{skill.level}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="col-span-2 text-right text-neutral-400 group-hover:text-white">
                        {skill.duration}
                      </div>

                      {/* Add button (appears on hover) */}
                      <motion.div
                        className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <PlusCircle className="h-5 w-5 text-neutral-400 hover:text-white" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
