import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CompanyQuestion } from '@/lib/types'

interface CompanyQuestionsProps {
  companyName: string;
  questions: CompanyQuestion[];
}

export function CompanyQuestions({ companyName, questions }: CompanyQuestionsProps) {
  if (questions.length === 0) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient-primary">{companyName}  Questions</h1>
        <p className="text-xl text-muted-foreground">
          No questions found for {companyName}. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient-primary">{companyName} Interview Questions</h1>
        <p className="text-xl text-muted-foreground">
          Curated list of {questions.length} questions frequently asked at {companyName} interviews
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {questions.map((question) => (
          <Card key={question.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-lg">{question.title}</CardTitle>
                <Badge variant={
                  question.difficulty === 'Easy' ? 'success' :
                  question.difficulty === 'Medium' ? 'warning' : 'destructive'
                }>
                  {question.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex flex-wrap gap-2">
                {question.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {question.companies.filter(c => c !== companyName).map((company) => (
                  <Badge key={company} variant="outline">
                    {company}
                  </Badge>
                ))}
              </div>
              <a 
                href={question.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                Solve Problem →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

