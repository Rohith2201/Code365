import { ProblemCard } from '@/components/problem-card'
import { Problem } from '@/lib/problems'

interface TopicSectionProps {
  topic: string
  problems: Problem[]
}

export function TopicSection({ topic, problems }: TopicSectionProps) {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4 px-4 py-2 bg-primary/10 rounded-lg inline-block">
        {topic}
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <ProblemCard key={index} problem={problem} />
        ))}
      </div>
    </section>
  )
}

