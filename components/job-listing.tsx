import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface JobListingProps {
  title: string
  department: string
  location: string
  type: string
  applicationUrl: string
}

export function JobListing({ title, department, location, type, applicationUrl }: JobListingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{title}</span>
          <Badge>{type}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Department: {department}</p>
        <p className="mb-4">Location: {location}</p>
        <Button asChild>
          <Link href={applicationUrl} target="_blank" rel="noopener noreferrer">
            Apply Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

