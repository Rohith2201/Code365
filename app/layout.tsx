import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Code 365 - DSA Cracker",
  description: "Master Data Structures and Algorithms with our curated problem set",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <Link
                    href="/"
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-0"
                  >
                    Code 365
                  </Link>
                  <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Home
                    </Link>
                    <Link
                      href="/problems"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Problems
                    </Link>
                    <Link
                      href="/companies"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Companies
                    </Link>
                    <Link
                      href="/events"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Events
                    </Link>
                    <Link
                      href="/resources"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Resources
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      About
                    </Link>
                    <Link
                      href="/careers"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Careers
                    </Link>
                    <a
                      href="https://coderesume.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1"
                    >
                      Resume Builder
                    </a>
                  </nav>
                  <div className="mt-4 sm:mt-0">
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </header>
            <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

