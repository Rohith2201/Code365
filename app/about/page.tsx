import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { Linkedin, Github, Instagram } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 p-8 rounded-lg shadow-lg">
    <title>About - Code 365</title>
      <meta name="description" content="Learn more about Code 365 and our mission to empower aspiring programmers and experienced developers to master Data Structures and Algorithms." />
      <meta name="keywords" content="DSA, Problems, Interview Questions" />
      <meta name="author" content="Code 365 Team" />
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient-primary">About Code 365</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At Code 365, our mission is to empower aspiring programmers and experienced developers alike to master Data Structures and Algorithms (DSA). We believe that a strong foundation in these fundamental concepts is crucial for success in the ever-evolving world of technology.
        </p>
        <p className="mb-4">
          Our platform is designed to provide a structured, comprehensive, and engaging learning experience that caters to learners at all levels. Whether you're preparing for job interviews, competitive programming contests, or simply want to sharpen your problem-solving skills, Code 365 is here to support your journey.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>A curated collection of over 360 DSA problems, carefully selected to cover a wide range of topics and difficulty levels</li>
          <li>Company-specific question sets to help you prepare for interviews at top tech companies</li>
          <li>An active community of learners and experienced developers for support and collaboration</li>
          <li>Progress tracking tools to help you monitor your growth and identify areas for improvement</li>
          <li>Regular contests and challenges to test your skills and compete with peers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet The Developer</h2>
        <Card>
          <CardHeader>
            <CardTitle>Rohith Juluru</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <Image
              src="https://avatars.githubusercontent.com/u/94969985?v=4?height=100&width=100"
              alt="Rohith"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Lead Developer</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Rohith is the driving force behind Code 365. With a passion for algorithms and a knack for creating intuitive user experiences, Rohith has crafted Code 365 to be the go-to platform for DSA learning.
              </p>
              <div className="flex space-x-2">
                <a href="https://www.linkedin.com/in/julururohith2004" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Rohith2201" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/juluru.rohith" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us on This Journey</h2>
        <p>
          We're committed to continually improving and expanding Code 365 to meet the needs of our community. Your feedback and suggestions are invaluable to us as we work to create the best possible learning experience. Together, let's unlock the power of algorithms and data structures!
        </p>
      </section>
    </div>
  )
}

