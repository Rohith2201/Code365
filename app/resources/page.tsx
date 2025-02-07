'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ExternalLink, FileText, ImageIcon, Search } from 'lucide-react'
import Link from 'next/link'
import resourcesData from '@/lib/resources.json'

interface Resource {
  title: string
  type: 'drive' | 'pdf' | 'image'
  url: string
  description: string
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredResources = resourcesData.resources.filter((resource: Resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <title>Resources - Code 365</title>
        <meta name="description" content="Resources for Data Structures and Algorithms" />
        <meta name="keywords" content="DSA Resources, Cheat Sheets, System Design, Big O Notation" />
        <meta name="author" content="Code 365 Team" />
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Resources
      </h1>
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
      {filteredResources.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">No resources found matching your search.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource: Resource, index: number) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {resource.type === 'drive' && <ExternalLink className="h-5 w-5" />}
                  {resource.type === 'pdf' && <FileText className="h-5 w-5" />}
                  {resource.type === 'image' && <ImageIcon className="h-5 w-5" />}
                  <span>{resource.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Link
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                  View Resource →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

