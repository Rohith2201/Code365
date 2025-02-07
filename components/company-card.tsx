import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface CompanyCardProps {
  name: string
  logo: string
  questions: number
}

export function CompanyCard({ name, logo, questions }: CompanyCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Image src={logo} alt={`${name} logo`} width={32} height={32} className="rounded-full" />
          <span>{name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{questions} questions</p>
        <Link href={`/companies/${name.toLowerCase()}`} className="mt-4 inline-block">
          <Badge variant="secondary" className="hover:bg-secondary/80">
            View All Questions
          </Badge>
        </Link>
      </CardContent>
    </Card>
  )
}

