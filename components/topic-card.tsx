import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

interface TopicCardProps {
  topic: string
  onSelect: () => void
  progress: number
}

export function TopicCard({ topic, onSelect, progress }: TopicCardProps) {
  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-blue-500 to-purple-600 border-0"
      onClick={onSelect}
    >
      <CardHeader>
        <CardTitle className="text-lg text-white">{topic}</CardTitle>
        <p className="text-sm text-white/80">{Math.round(progress)}% complete</p>
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        <Progress value={progress} className="mb-2" />
        <div className="flex justify-end">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </CardContent>
    </Card>
  )
}

