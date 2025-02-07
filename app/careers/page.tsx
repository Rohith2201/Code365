import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { JobListing } from "@/components/job-listing"

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Intern",
    applicationUrl: "https://forms.gle/exampleFormUrl1",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Intern",
    applicationUrl: "https://forms.gle/exampleFormUrl3",
  },
  {
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote",
    type: "Intern",
    applicationUrl: "https://forms.gle/exampleFormUrl4",
  },
]

export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 p-8 rounded-lg shadow-lg">
      <section>
        <h1 className="text-4xl font-bold mb-4 text-center text-gradient-primary">Careers at Code 365</h1>
        <p className="text-lg text-center mb-8">
          Join our team and help shape the future of programming education!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Innovative Environment</CardTitle>
            </CardHeader>
            <CardContent>
              Work on cutting-edge technology and help solve complex problems in education and technology.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              We invest in our employees' professional development with mentorship programs and learning resources.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Work-Life Balance</CardTitle>
            </CardHeader>
            <CardContent>
              Flexible working hours and remote work options to help you maintain a healthy work-life balance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inclusive Culture</CardTitle>
            </CardHeader>
            <CardContent>
              We celebrate diversity and foster an inclusive environment where all voices are heard and valued.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <div className="space-y-4">
          {jobOpenings.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Hiring Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Application review</li>
          <li>Initial phone screen</li>
          <li>Technical assessment or take-home project</li>
          <li>On-site or virtual interviews</li>
          <li>Reference checks</li>
          <li>Offer and onboarding</li>
        </ol>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Don't see a perfect fit?</h2>
        <p className="mb-4">
          We're always on the lookout for talented individuals. Send your resume to{' '}
          <a href="mailto:careers@code365.com" className="text-blue-600 hover:underline">
            careers@code365.com
          </a>
          .
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}

