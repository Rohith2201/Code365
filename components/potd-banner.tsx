import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, Zap } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import type { Problem } from "@/lib/problems"

interface PotdBannerProps {
  problem: Problem | null
}

export function PotdBanner({ problem }: PotdBannerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(100)

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date()
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)
      const total = endOfDay.getTime() - now.getTime()
      const left = (total / (24 * 60 * 60 * 1000)) * 100
      setTimeLeft(left)
    }

    updateTimeLeft()
    const interval = setInterval(updateTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!problem) {
    return null
  }

  return (
    <Card className="bg-gradient-to-r from-emerald-600 to-green-600 text-white mb-8 overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-3xl font-bold">
          <Zap className="mr-2 text-yellow-300" />
          Daily Challenge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-xl font-semibold text-gray-100">{problem["Problem: "]}</p>
        <div className="flex items-center mb-4">
          <Clock className="mr-2 text-yellow-300" />
          <div className="flex-grow">
            <Progress value={timeLeft} className="h-3 bg-emerald-300" />
          </div>
          <span className="ml-2 text-sm font-medium text-yellow-300">
            {Math.floor((timeLeft / 100) * 24)}h {Math.floor(((timeLeft / 100) * 24 * 60) % 60)}m left
          </span>
        </div>
        <Button
          asChild
          variant="secondary"
          className="bg-emerald-400 text-emerald-900 hover:bg-emerald-300 font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Link href="/potd">Accept Challenge</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

