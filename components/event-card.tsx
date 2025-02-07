'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from 'lucide-react'
import Image from "next/image"
import { Event } from "@/lib/types"

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <Image 
          src={event.posterUrl} 
          alt={`Poster for ${event.title}`} 
          width={600} 
          height={400} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardTitle className="mt-4">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge className="mb-2">{event.type}</Badge>
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarDays className="mr-2 h-4 w-4" />
          {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          {event.location}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-sm text-muted-foreground mb-2">
          Application Deadline: {new Date(event.applicationDeadline).toLocaleDateString()}
        </p>
        <Button asChild className="w-full">
          <a href={event.applyLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

