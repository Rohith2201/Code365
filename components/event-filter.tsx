'use client'

import { Button } from "@/components/ui/button"
import { EventType } from "@/lib/types"

interface EventFilterProps {
  selectedType: EventType | "all"
  onTypeChange: (type: EventType | "all") => void
}

export function EventFilter({ selectedType, onTypeChange }: EventFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant={selectedType === "all" ? "default" : "outline"}
        onClick={() => onTypeChange("all")}
      >
        All Events
      </Button>
      {Object.values(EventType).map((type) => (
        <Button
          key={type}
          variant={selectedType === type ? "default" : "outline"}
          onClick={() => onTypeChange(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  )
}

