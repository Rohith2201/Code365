import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Heart, Code, Users, Building2, Briefcase } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Code 365 - DSA Cracker
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Code 365 is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
          <Link href="/problems">Start Exploring</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">A New Way to Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">Code 365 is a well-organized tool that helps you get the most out of your learning by providing structure to guide your progress towards the next step in your programming career.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="/problems">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-purple-900 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700 dark:text-purple-300">Questions, Community & Contests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">Over 360 questions for you to practice. Join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-purple-500 hover:bg-purple-600 text-white">
              <Link href="/problems">View Questions</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-green-900 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 dark:text-green-300">Companies & Candidates</CardTitle>
            <CardDescription className="text-green-600 dark:text-green-400">Company-wise Questions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">Explore questions tailored to specific companies and prepare for your dream job.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="/companies">Business Opportunities</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-800 dark:to-yellow-900 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-700 dark:text-yellow-300">Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">We now support 14 popular coding languages. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-800 dark:to-red-900 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700 dark:text-red-300">Made with <Heart className="inline-block text-red-500" /> in INDIA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">At Code 365, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="text-center space-y-8 py-12 rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Why Choose Code 365?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Code size={48} className="text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">360+ Questions</h3>
            <p className="text-gray-600 dark:text-gray-300">A vast array of problems to solve</p>
          </div>
          <div className="flex flex-col items-center">
            <Users size={48} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Active Community</h3>
            <p className="text-gray-600 dark:text-gray-300">Learn and grow with peers</p>
          </div>
          <div className="flex flex-col items-center">
            <Building2 size={48} className="text-purple-500 mb-2" />
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">Company Specific</h3>
            <p className="text-gray-600 dark:text-gray-300">Tailored interview preparation</p>
          </div>
          <div className="flex flex-col items-center">
            <Briefcase size={48} className="text-orange-500 mb-2" />
            <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">Career Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">Land your dream job</p>
          </div>
        </div>
      </section>

      <section className="space-y-8 py-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is Code 365 free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, Code 365 offers a free tier with access to a wide range of problems and features. We also offer premium plans for additional content and features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How often are new problems added?</AccordionTrigger>
            <AccordionContent>
              We add new problems weekly, ensuring that our content stays fresh and up-to-date with the latest interview trends and coding challenges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I track my progress?</AccordionTrigger>
            <AccordionContent>
              Code 365 provides comprehensive progress tracking features, allowing you to monitor your solved problems, track your performance over time, and identify areas for improvement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is Code 365 suitable for beginners?</AccordionTrigger>
            <AccordionContent>
              Yes, Code 365 caters to all skill levels. We offer a structured learning path that starts with fundamental concepts and gradually progresses to more advanced topics, making it ideal for beginners and experienced programmers alike.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How can I get help if I'm stuck on a problem?</AccordionTrigger>
            <AccordionContent>
              Coming Up ----- Code 365 has a vibrant community of learners and experienced developers. You can ask questions, seek clarification, and discuss problems in our community forums. Additionally, we provide detailed explanations and solution approaches for each problem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

