"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProblemCard } from "@/components/problem-card"
import { StreakCalendar } from "@/components/streak-calendar"
import { loadProblems, type Problem } from "@/lib/problems"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Flame, Trophy, Target, Calendar, Zap, Award, Star, Users, Share2 } from "lucide-react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { DatePicker } from "@/components/date-picker"
import confetti from "canvas-confetti"
import { Progress } from "@/components/ui/progress"
import { SocialShare } from "@/components/social-share"

export default function PotdPage() {
  const [problemOfTheDay, setProblemOfTheDay] = useState<Problem | null>(null)
  const [streak, setStreak] = useState(0)
  const [lastCompletedDate, setLastCompletedDate] = useState<string | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [weeklyStats, setWeeklyStats] = useState<{ day: string; completed: number }[]>([])
  const [totalCompleted, setTotalCompleted] = useState(0)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    const storedStreak = localStorage.getItem("streak")
    const storedLastCompletedDate = localStorage.getItem("lastCompletedDate")
    const storedTotalCompleted = localStorage.getItem("totalCompleted")
    const storedXp = localStorage.getItem("xp")
    const storedLevel = localStorage.getItem("level")
    if (storedStreak) setStreak(Number.parseInt(storedStreak, 10))
    if (storedLastCompletedDate) setLastCompletedDate(storedLastCompletedDate)
    if (storedTotalCompleted) setTotalCompleted(Number.parseInt(storedTotalCompleted, 10))
    if (storedXp) setXp(Number.parseInt(storedXp, 10))
    if (storedLevel) setLevel(Number.parseInt(storedLevel, 10))

    const today = new Date().toLocaleDateString()
    if (storedLastCompletedDate === today) {
      setIsCompleted(true)
    }

    // Initialize weekly stats
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const initialStats = days.map((day) => ({ day, completed: 0 }))
    setWeeklyStats(initialStats)
  }, [])

  useEffect(() => {
    fetchProblemForDate(selectedDate)
  }, [selectedDate])

  async function fetchProblemForDate(date: Date) {
    const problems = await loadProblems()
    const dateString = date.toLocaleDateString()

    // Use the date to generate a consistent random index
    const seed = dateString.split("/").reduce((acc, val) => acc + Number.parseInt(val), 0)
    const randomIndex = seed % problems.length

    const problem = problems[randomIndex]
    setProblemOfTheDay(problem)

    if (dateString === new Date().toLocaleDateString()) {
      localStorage.setItem("potdId", problem.id)
      localStorage.setItem("potdDate", dateString)
    }
  }

  const handleProblemCompletion = () => {
    const today = new Date().toLocaleDateString()
    if (lastCompletedDate !== today) {
      const newStreak = lastCompletedDate === new Date(Date.now() - 86400000).toLocaleDateString() ? streak + 1 : 1
      const newTotalCompleted = totalCompleted + 1
      const xpGained = 50 + newStreak * 10
      const newXp = xp + xpGained
      const newLevel = Math.floor(newXp / 1000) + 1

      setStreak(newStreak)
      setTotalCompleted(newTotalCompleted)
      setXp(newXp)
      setLevel(newLevel)
      localStorage.setItem("streak", newStreak.toString())
      localStorage.setItem("totalCompleted", newTotalCompleted.toString())
      localStorage.setItem("xp", newXp.toString())
      localStorage.setItem("level", newLevel.toString())
      setLastCompletedDate(today)
      localStorage.setItem("lastCompletedDate", today)
      setIsCompleted(true)

      // Update weekly stats
      const dayIndex = new Date().getDay()
      setWeeklyStats((prev) => {
        const newStats = [...prev]
        newStats[dayIndex].completed += 1
        return newStats
      })

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gradient-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Code Quest: Daily Challenge
      </motion.h1>
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </motion.div>
      {problemOfTheDay && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="mr-2 text-blue-500" />
                  Today's Quest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProblemCard
                  problem={problemOfTheDay}
                  onToggle={() => {}}
                  note=""
                  onUpdateNote={() => {}}
                  isSaved={false}
                  onToggleSave={() => {}}
                />
                <div className="mt-4 flex justify-center">
                  <Button
                    onClick={handleProblemCompletion}
                    disabled={isCompleted || selectedDate.toDateString() !== new Date().toDateString()}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    {isCompleted ? "Quest Completed!" : "Complete Quest"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="mr-2 text-purple-500" />
                  Your Quest Log
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StreakCalendar streak={streak} lastCompletedDate={lastCompletedDate} />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Flame className="mr-2 text-orange-500" />
                    Quest Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div style={{ width: 100, height: 100 }}>
                      <CircularProgressbar
                        value={streak}
                        maxValue={30}
                        text={`${streak}`}
                        styles={buildStyles({
                          textSize: "2rem",
                          pathColor: `rgba(255, 136, 0, ${streak / 30})`,
                          textColor: "#ff8800",
                          trailColor: "#d6d6d6",
                        })}
                      />
                    </div>
                  </div>
                  <p className="text-center mt-2 font-semibold">days</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Trophy className="mr-2 text-yellow-500" />
                    Quests Completed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div style={{ width: 100, height: 100 }}>
                      <CircularProgressbar
                        value={totalCompleted}
                        maxValue={100}
                        text={`${totalCompleted}`}
                        styles={buildStyles({
                          textSize: "2rem",
                          pathColor: `rgba(255, 206, 0, ${totalCompleted / 100})`,
                          textColor: "#ffce00",
                          trailColor: "#d6d6d6",
                        })}
                      />
                    </div>
                  </div>
                  <p className="text-center mt-2 font-semibold">total</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Zap className="mr-2 text-blue-500" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-semibold">Level {level}</p>
                    <p className="text-sm text-gray-500">
                      XP: {xp} / {level * 1000}
                    </p>
                  </div>
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={(xp % 1000) / 10}
                      text={`${level}`}
                      styles={buildStyles({
                        textSize: "2rem",
                        pathColor: `rgba(59, 130, 246, ${(xp % 1000) / 1000})`,
                        textColor: "#3b82f6",
                        trailColor: "#d6d6d6",
                      })}
                    />
                  </div>
                </div>
                <Progress value={(xp % 1000) / 10} className="h-2 mb-2" />
                <p className="text-sm text-center text-gray-500">{xp % 1000} / 1000 XP to next level</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-2 text-green-500" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">1. CodeMaster123</span>
                    <span>Level 42</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">2. AlgorithmWizard</span>
                    <span>Level 39</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">3. ByteBuster</span>
                    <span>Level 37</span>
                  </li>
                  <li className="flex justify-between items-center text-blue-500">
                    <span className="font-semibold">You</span>
                    <span>Level {level}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Trophy className="mr-2 text-yellow-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Flame className="h-6 w-6 text-orange-500 mr-2" />
                    <Badge variant="secondary">7 Day Streak</Badge>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <Badge variant="secondary">30 Day Streak</Badge>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-green-500 mr-2" />
                    <Badge variant="secondary">50 Quests Completed</Badge>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-blue-500 mr-2" />
                    <Badge variant="secondary">100 Quests Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Share2 className="mr-2 text-purple-500" />
                  Share Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Let your friends know about your coding journey!</p>
                <SocialShare
                  title={`@MetacodeA I just completed today's coding challenge on Code 365! My current streak is ${streak} days. Join me in mastering DSA!`}
                  url="https://code365.dev/potd"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  )
}

