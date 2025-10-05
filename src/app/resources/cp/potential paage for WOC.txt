// import Link from "next/link";
// import Image from "next/image";
// import { Montserrat, Alata } from "next/font/google";

// const montserratFont = Montserrat({
//   weight: ["100", "200", "400", "600"],
//   subsets: ["latin"],
// });

// const alataFont = Alata({ weight: ["400"], subsets: ["latin"] });

// function CPResources() {
//   return (
//     <div className="mt-10 flex flex-col items-center">
//       <div className={`${alataFont.className} text-4xl underline mb-8`}>
//         Competitive Programming
//       </div>
//     </div>
//   );
// }

// export default CPResources;
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Circle,
  Clock,
  BookOpen,
  Code,
  Trophy,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
} from "lucide-react"

interface WeekData {
  week: number
  title: string
  description: string
  topics: string[]
  resources: { name: string; url: string; type: "tutorial" | "practice" | "video" }[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed: boolean
}

const roadmapData: WeekData[] = [
  {
    week: 1,
    title: "Programming Fundamentals",
    description: "Master the basics of programming and problem-solving",
    topics: ["Variables & Data Types", "Control Structures", "Functions", "Arrays"],
    resources: [
      { name: "C++ Basics Tutorial", url: "#", type: "tutorial" },
      { name: "Basic Problems", url: "#", type: "practice" },
      { name: "Programming Fundamentals Video", url: "#", type: "video" },
    ],
    difficulty: "Beginner",
    completed: true,
  },
  {
    week: 2,
    title: "Time & Space Complexity",
    description: "Learn to analyze algorithm efficiency",
    topics: ["Big O Notation", "Time Complexity", "Space Complexity", "Optimization"],
    resources: [
      { name: "Complexity Analysis Guide", url: "#", type: "tutorial" },
      { name: "Complexity Problems", url: "#", type: "practice" },
      { name: "Big O Explained", url: "#", type: "video" },
    ],
    difficulty: "Beginner",
    completed: true,
  },
  {
    week: 3,
    title: "Sorting & Searching",
    description: "Master fundamental algorithms",
    topics: ["Bubble Sort", "Quick Sort", "Merge Sort", "Binary Search"],
    resources: [
      { name: "Sorting Algorithms", url: "#", type: "tutorial" },
      { name: "Search Problems", url: "#", type: "practice" },
      { name: "Sorting Visualized", url: "#", type: "video" },
    ],
    difficulty: "Beginner",
    completed: false,
  },
  {
    week: 4,
    title: "Data Structures - Linear",
    description: "Arrays, Linked Lists, Stacks, and Queues",
    topics: ["Arrays", "Linked Lists", "Stacks", "Queues"],
    resources: [
      { name: "Linear Data Structures", url: "#", type: "tutorial" },
      { name: "DS Implementation", url: "#", type: "practice" },
      { name: "Data Structures Course", url: "#", type: "video" },
    ],
    difficulty: "Intermediate",
    completed: false,
  },
  {
    week: 5,
    title: "Recursion & Backtracking",
    description: "Solve problems using recursive approaches",
    topics: ["Recursion Basics", "Backtracking", "Tree Recursion", "Memoization"],
    resources: [
      { name: "Recursion Guide", url: "#", type: "tutorial" },
      { name: "Recursive Problems", url: "#", type: "practice" },
      { name: "Backtracking Explained", url: "#", type: "video" },
    ],
    difficulty: "Intermediate",
    completed: false,
  },
  {
    week: 6,
    title: "Trees & Binary Trees",
    description: "Master tree data structures and algorithms",
    topics: ["Binary Trees", "Tree Traversals", "BST", "Tree Problems"],
    resources: [
      { name: "Tree Algorithms", url: "#", type: "tutorial" },
      { name: "Tree Practice", url: "#", type: "practice" },
      { name: "Tree Visualization", url: "#", type: "video" },
    ],
    difficulty: "Intermediate",
    completed: false,
  },
  {
    week: 7,
    title: "Dynamic Programming",
    description: "Optimize recursive solutions",
    topics: ["DP Basics", "Memoization", "Tabulation", "Classic DP Problems"],
    resources: [
      { name: "DP Patterns", url: "#", type: "tutorial" },
      { name: "DP Problems", url: "#", type: "practice" },
      { name: "DP Masterclass", url: "#", type: "video" },
    ],
    difficulty: "Advanced",
    completed: false,
  },
  {
    week: 8,
    title: "Graphs & Graph Algorithms",
    description: "Navigate complex relationships",
    topics: ["Graph Representation", "BFS", "DFS", "Shortest Path"],
    resources: [
      { name: "Graph Theory", url: "#", type: "tutorial" },
      { name: "Graph Problems", url: "#", type: "practice" },
      { name: "Graph Algorithms", url: "#", type: "video" },
    ],
    difficulty: "Advanced",
    completed: false,
  },
]

const extraResources = [
  {
    category: "Online Judges",
    items: [
      { name: "Codeforces", url: "https://codeforces.com", description: "Premier competitive programming platform" },
      { name: "AtCoder", url: "https://atcoder.jp", description: "Japanese competitive programming site" },
      { name: "CodeChef", url: "https://codechef.com", description: "Global programming community" },
      { name: "LeetCode", url: "https://leetcode.com", description: "Interview preparation platform" },
    ],
  },
  {
    category: "Learning Resources",
    items: [
      { name: "CP-Algorithms", url: "https://cp-algorithms.com", description: "Comprehensive algorithm reference" },
      { name: "USACO Guide", url: "https://usaco.guide", description: "Structured competitive programming curriculum" },
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", description: "Programming tutorials and practice" },
      { name: "Competitive Programmer's Handbook", url: "#", description: "Free comprehensive CP book" },
    ],
  },
  {
    category: "Tools & Utilities",
    items: [
      { name: "Competitive Companion", url: "#", description: "Browser extension for parsing problems" },
      { name: "CP Editor", url: "#", description: "Specialized IDE for competitive programming" },
      { name: "Polygon", url: "#", description: "Problem preparation system" },
      { name: "Visualgo", url: "https://visualgo.net", description: "Algorithm visualization tool" },
    ],
  },
]

export default function CPRoadmap() {
  const [completedWeeks, setCompletedWeeks] = useState<number[]>([1, 2])
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([])

  const toggleWeekCompletion = (week: number) => {
    setCompletedWeeks((prev) => (prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]))
  }

  const toggleWeekExpansion = (week: number) => {
    setExpandedWeeks((prev) => (prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]))
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "tutorial":
        return <FileText className="h-4 w-4" />
      case "practice":
        return <Code className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
      case "Intermediate":
        return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
      case "Advanced":
        return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Competitive Programming Roadmap
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          A comprehensive 8-week journey to master competitive programming. Follow this structured path to build your
          problem-solving skills from the ground up.
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-blue-600" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-blue-600">{completedWeeks.length}/8</div>
            <div className="flex-1">
              <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(completedWeeks.length / 8) * 100}%` }}
                />
              </div>
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              {Math.round((completedWeeks.length / 8) * 100)}% Complete
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800" />

        <div className="space-y-6">
          {roadmapData.map((week, index) => {
            const isCompleted = completedWeeks.includes(week.week)
            const isCurrent = !isCompleted && completedWeeks.length + 1 === week.week
            const isExpanded = expandedWeeks.includes(week.week)

            return (
              <div key={week.week} className="relative">
                {/* Connection Node */}
                <div className="absolute left-6 top-6 z-10">
                  {isCompleted ? (
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  ) : isCurrent ? (
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center animate-pulse">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Circle className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Week Card */}
                <Card
                  className={`ml-16 transition-all duration-300 hover:shadow-lg cursor-pointer group ${isCompleted
                    ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800"
                    : isCurrent
                      ? "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800 shadow-md"
                      : "bg-card border-border hover:border-blue-200 dark:hover:border-blue-800"
                    }`}
                  onClick={() => toggleWeekExpansion(week.week)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            Week {week.week}
                        </div>
                        <CardTitle className="text-xl text-card-foreground group-hover:text-blue-600 transition-colors">
                          {week.title}
                        </CardTitle>
                        <CardDescription className="mt-1">{week.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Button
                          variant={isCompleted ? "default" : "outline"}
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleWeekCompletion(week.week)
                          }}
                          className={
                            isCompleted
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                              : ""
                          }
                        >
                          {isCompleted ? "Completed" : "Mark Complete"}
                        </Button>
                        <div className="text-blue-600 transition-transform duration-200">
                          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <CardContent className="pt-0">
                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          Topics Covered:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {week.topics.map((topic) => (
                            <div
                              key={topic}
                              className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-500" />
                              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Resources */}
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-purple-600" />
                          Learning Resources:
                        </h4>
                        <div className="space-y-2">
                          {week.resources.map((resource) => (
                            <Button
                              key={resource.name}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start h-auto p-3 text-left hover:bg-blue-50 dark:hover:bg-blue-950/30 group/resource"
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={resource.url} className="flex items-center gap-3">
                                <div
                                  className={`p-1.5 rounded-md ${resource.type === "tutorial"
                                    ? "bg-green-100 dark:bg-green-900/30"
                                    : resource.type === "practice"
                                      ? "bg-blue-100 dark:bg-blue-950/30"
                                      : "bg-purple-100 dark:bg-purple-900/30"
                                    }`}
                                >
                                  {getResourceIcon(resource.type)}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-medium group-hover/resource:text-blue-600 transition-colors">
                                    {resource.name}
                                  </span>
                                  <div className="text-xs text-muted-foreground capitalize">{resource.type}</div>
                                </div>
                                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover/resource:text-blue-600 transition-colors" />
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Extra Resources */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Additional Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {extraResources.map((category) => (
            <Card
              key={category.category}
              className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/50 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="group">
                      <a
                        href={item.url}
                        className="block p-3 rounded-lg hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-card-foreground group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h4>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
