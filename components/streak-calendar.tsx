import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import { format, subDays } from "date-fns"

interface StreakCalendarProps {
  streak: number
  lastCompletedDate: string | null
}

export function StreakCalendar({ streak, lastCompletedDate }: StreakCalendarProps) {
  const [calendar, setCalendar] = useState<{ date: Date; completed: boolean }[]>([])

  useEffect(() => {
    const today = new Date()
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = subDays(today, i)
      return { date, completed: false }
    })

    if (lastCompletedDate) {
      const lastCompleted = new Date(lastCompletedDate)
      for (let i = 0; i < streak; i++) {
        const date = subDays(today, i)
        if (date >= lastCompleted) {
          last30Days[i].completed = true
        } else {
          break
        }
      }
    }

    setCalendar(last30Days.reverse())
  }, [streak, lastCompletedDate])

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-2">Your Streak Calendar</h3>
      <div className="grid grid-cols-7 gap-1">
        {calendar.map(({ date, completed }, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-1 rounded-full ${
              completed ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <span className="text-xs">{format(date, "d")}</span>
            {completed ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
          </div>
        ))}
      </div>
    </Card>
  )
}

