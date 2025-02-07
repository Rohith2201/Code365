import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ExternalLink, BookmarkPlus, BookmarkMinus, CheckCircle, XCircle } from 'lucide-react'
import Link from "next/link"
import { Problem } from "@/lib/problems"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

interface ProblemCardProps {
  problem: Problem
  onToggle: (id: string) => void
  note: string
  onUpdateNote: (note: string) => void
  isSaved: boolean
  onToggleSave: () => void
  className?: string
}

export function ProblemCard({ problem, onToggle, note, onUpdateNote, isSaved, onToggleSave, className }: ProblemCardProps) {
  const [isEditingNote, setIsEditingNote] = useState(false)
  const [localNote, setLocalNote] = useState(note)

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalNote(e.target.value)
  }

  const handleSaveNote = () => {
    onUpdateNote(localNote)
    setIsEditingNote(false)
  }

  return (
    <Card className={`flex flex-col h-full transition-all hover:shadow-lg ${
  problem.Done === "yes" 
    ? "bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 border-l-4 border-l-green-500" 
    : "border-l-4 border-l-yellow-500"
} ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-base sm:text-lg flex justify-between items-start ${
  problem.Done === "yes" ? "text-green-700 dark:text-green-300" : "text-gray-700 dark:text-gray-300"
}`}>
          <span className="text-primary">{problem["Problem: "]}</span>
          <Button variant="ghost" size="sm" onClick={onToggleSave} className="text-primary hover:text-primary-dark">
            {isSaved ? <BookmarkMinus className="h-4 w-4 sm:h-5 sm:w-5" /> : <BookmarkPlus className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-muted-foreground">ID: {problem.id}</p>
          <Badge variant={problem.Done === "yes" ? "success" : "warning"}>
            {problem.Done === "yes" ? (
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 mr-1 text-yellow-500" />
            )}
            {problem.Done === "yes" ? "Completed" : "Not Completed"}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {problem.companies.map((company) => (
            <Badge key={company} variant="outline">
              <Link href={`/companies/${company.toLowerCase()}`}>
                {company}
              </Link>
            </Badge>
          ))}
        </div>
        {isEditingNote ? (
          <Textarea
            value={localNote}
            onChange={handleNoteChange}
            placeholder="Add your notes here..."
            className="w-full mt-2"
          />
        ) : (
          <p className="text-sm mt-2">{localNote || 'No notes yet. Click to add.'}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id={`problem-${problem.id}`} 
            checked={problem.Done === "yes"}
            onCheckedChange={() => onToggle(problem.id)}
            className={problem.Done === "yes" ? "text-green-500" : "text-yellow-500"}
          />
          <label 
            htmlFor={`problem-${problem.id}`} 
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              problem.Done === "yes" ? "text-green-700 dark:text-green-300" : "text-yellow-700 dark:text-yellow-300"
            }`}
          >
            Mark as done
          </label>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              if (isEditingNote) {
                handleSaveNote()
              } else {
                setIsEditingNote(true)
              }
            }}
          >
            {isEditingNote ? 'Save Note' : 'Edit Note'}
          </Button>
          <Button asChild variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link
              href={problem.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Solve
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

