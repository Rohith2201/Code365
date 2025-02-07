'use client'

import { useState, useEffect } from 'react'
import { ProblemCard } from '@/components/problem-card'
import { TopicCard } from '@/components/topic-card'
import { loadProblems, groupProblemsByTopic, Problem } from '@/lib/problems'
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from 'lucide-react'
import { PotdBanner } from '@/components/potd-banner'

export default function ProblemsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [completedProblems, setCompletedProblems] = useState<string[]>([])
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [savedProblems, setSavedProblems] = useState<string[]>([])
  const [problems, setProblems] = useState<Problem[]>([])
  const [potd, setPotd] = useState<Problem | null>(null)

  useEffect(() => {
    const storedCompletedProblems = localStorage.getItem('completedProblems')
    const storedNotes = localStorage.getItem('notes')
    const storedSavedProblems = localStorage.getItem('savedProblems')
    if (storedCompletedProblems) setCompletedProblems(JSON.parse(storedCompletedProblems))
    if (storedNotes) setNotes(JSON.parse(storedNotes))
    if (storedSavedProblems) setSavedProblems(JSON.parse(storedSavedProblems))
  }, [])

  useEffect(() => {
    async function fetchProblems() {
      const loadedProblems = await loadProblems()
      setProblems(loadedProblems)
    }
    fetchProblems()
  }, [])

  useEffect(() => {
    const fetchPotd = async () => {
      const allProblems = await loadProblems()
      const today = new Date().toLocaleDateString()
      const storedProblemId = localStorage.getItem('potdId')
      const storedProblemDate = localStorage.getItem('potdDate')

      if (storedProblemId && storedProblemDate === today) {
        const storedProblem = allProblems.find(p => p.id === storedProblemId)
        if (storedProblem) {
          setPotd(storedProblem)
          return
        }
      }

      const randomIndex = Math.floor(Math.random() * allProblems.length)
      const newProblem = allProblems[randomIndex]
      setPotd(newProblem)
      localStorage.setItem('potdId', newProblem.id)
      localStorage.setItem('potdDate', today)
    }

    fetchPotd()
  }, [])

  const topics = Object.keys(groupProblemsByTopic(problems))

  const calculateTopicProgress = (topic: string) => {
    const topicProblems = problems.filter(problem => problem["Topic:"] === topic);
    const completedTopicProblems = topicProblems.filter(problem => completedProblems.includes(problem.id));
    return (completedTopicProblems.length / topicProblems.length) * 100;
  }

  const filteredProblems = selectedTopic
    ? problems.filter(problem => 
        problem["Topic:"] === selectedTopic &&
        problem["Problem: "].toLowerCase().includes(searchTerm.toLowerCase())
      )
    : problems.filter(problem => problem["Problem: "].toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleProblemCompletion = (id: string) => {
    setCompletedProblems(prev => {
      const newCompletedProblems = prev.includes(id)
        ? prev.filter(problemId => problemId !== id)
        : [...prev, id]
      localStorage.setItem('completedProblems', JSON.stringify(newCompletedProblems))
      return newCompletedProblems
    })
  }

  const updateNote = (id: string, note: string) => {
    setNotes(prev => {
      const newNotes = { ...prev, [id]: note }
      localStorage.setItem('notes', JSON.stringify(newNotes))
      return newNotes
    })
  }

  const toggleSavedProblem = (id: string) => {
    setSavedProblems(prev => {
      const newSavedProblems = prev.includes(id)
        ? prev.filter(problemId => problemId !== id)
        : [...prev, id]
      localStorage.setItem('savedProblems', JSON.stringify(newSavedProblems))
      return newSavedProblems
    })
  }

  const totalProblems = filteredProblems.length
  const completedCount = filteredProblems.filter(problem => completedProblems.includes(problem.id)).length
  const progressPercentage = totalProblems > 0 ? (completedCount / totalProblems) * 100 : 0

  return (
    <div className="space-y-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen p-4 sm:p-8 rounded-lg shadow-lg">
    <title>Problems - Code 365</title>
      <meta name="description" content="Data Structures and Algorithms Problems" />
      <meta name="keywords" content="DSA, Problems, Interview Questions" />
      <meta name="author" content="Code 365 Team" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient-primary">DSA Problems</h1>
      {potd && (
        <PotdBanner problem={potd} />
      )}
      {!selectedTopic ? (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard 
              key={topic} 
              topic={topic} 
              onSelect={() => setSelectedTopic(topic)}
              progress={calculateTopicProgress(topic)}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button 
              onClick={() => setSelectedTopic(null)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
            </Button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Progress 
              value={progressPercentage} 
              className="flex-grow h-2 bg-yellow-200 dark:bg-yellow-900"
            >
              <div 
                className="h-full bg-green-500" 
                style={{ width: `${progressPercentage}%` }}
              />
            </Progress>
            <span className="text-gradient-primary font-semibold whitespace-nowrap">{completedCount}/{totalProblems} Done</span>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProblems.map((problem) => (
              <ProblemCard 
                key={problem.id} 
                problem={{...problem, Done: completedProblems.includes(problem.id) ? "yes" : "<->"}}
                onToggle={toggleProblemCompletion}
                note={notes[problem.id] || ''}
                onUpdateNote={(note) => updateNote(problem.id, note)}
                isSaved={savedProblems.includes(problem.id)}
                onToggleSave={() => toggleSavedProblem(problem.id)}
                className={completedProblems.includes(problem.id) ? "" : "border border-gray-200 dark:border-gray-700"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

