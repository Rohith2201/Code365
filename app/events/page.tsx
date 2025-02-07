'use client'

import { EventCard } from "@/components/event-card"
import { EventFilter } from "@/components/event-filter"
import { Event, EventType } from "@/lib/types"
import { useState } from "react"

// Mock data for events
const events: Event[] = [
  {
    id: "1",
    title: "Integration for AI/GenAI Hackathon 2025",
    type: EventType.Hackathon,
    startDate: "2024-12-17",
    endDate: "2025-03-29",
    applicationDeadline: "2025-02-02",
    applyLink: "https://example.com/apply-hackathon",
    description: "Participants are invited to explore innovative ways to connect enterprise data with generative AI for high-impact applications.",
    posterUrl: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1733395799044-Logo3.png?height=400&width=600",
    location: "Online",
  },
  {
    id: "2",
    title: "Shaastra 2025",
    type: EventType.TechFest,
    startDate: "2025-01-03",
    endDate: "2025-01-07",
    applicationDeadline: "2025-01-07",
    applyLink: "https://www.shaastra.org/",
    description: "Shaastra is the annual technical festival of the Indian Institute of Technology Madras (IITM), Chennai, India. The Sanskrit word 'Shaastra' means science, and the festival reflects this by featuring a wide range of activities including engineering, science, and technology competitions, summits, lectures, video conferences, exhibitions, demonstrations, and workshops.",
    posterUrl: "https://acr.iitm.ac.in/wp-content/uploads/2021/05/shaastramag-1.jpg?height=400&width=600",
    location: "IIT MADRAS, Chennai",
  },
  {
    id: "3",
    title: "Web Development Bootcamp",
    type: EventType.Bootcamp,
    startDate: "2024-05-01",
    endDate: "2024-05-31",
    applicationDeadline: "2024-04-25",
    applyLink: "https://example.com/apply-bootcamp",
    description: "Intensive 4-week bootcamp to master modern web development technologies.",
    posterUrl: "/placeholder.svg?height=400&width=600",
    location: "Online",
  },
]

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<EventType | "all">("all")

  const filteredEvents = selectedType === "all" 
    ? events 
    : events.filter(event => event.type === selectedType)

  return (
    <>
        <title>Events - Code 365</title>
        <meta name="description" content="Upcoming Tech Events" />
        <meta name="keywords" content="Tech Events, Hackathons, Bootcamps, Tech Conferences" />
        <meta name="author" content="Code 365 Team" />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Upcoming Events
      </h1>
      <EventFilter selectedType={selectedType} onTypeChange={setSelectedType} />
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    </>
  )
}

