import Link from "next/link"
import { Mail, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-20 pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dark:opacity-20 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 4px 4px, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-all group-hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                Code 365
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Master Data Structures and Algorithms with our curated problem set and prepare for technical interviews.
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: Twitter, url: "https://x.com/MetacodeA" },
                { Icon: Github, url: "https://github.com/CODEMETAPHOR" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/julururohith2004/" },
              ].map(({ Icon, url }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400"
                  asChild
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{Icon.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                Product
                <ArrowUpRight className="w-4 h-4 ml-1 text-blue-600 dark:text-blue-400" />
              </h3>
              <ul className="space-y-3">
                {["Problems", "Companies", "Events", "Resources", "Resume Builder"].map((item) => (
                  <li key={item}>
                    {item === "Resume Builder" ? (
                      <a
                        href="https://coderesume.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                      >
                        {item}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                      >
                        {item}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                Company
                <ArrowUpRight className="w-4 h-4 ml-1 text-blue-600 dark:text-blue-400" />
              </h3>
              <ul className="space-y-3">
                {["About", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                Legal
                <ArrowUpRight className="w-4 h-4 ml-1 text-blue-600 dark:text-blue-400" />
              </h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Terms of Service" ? "/terms" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">© 2024 Code 365. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

