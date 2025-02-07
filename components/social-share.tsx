import { useState } from "react"
import { Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface SocialShareProps {
  title: string
  url: string
  streak: number
}

export function SocialShare({ title, url, streak }: SocialShareProps) {
  const [isSharing, setIsSharing] = useState(false)

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, "_blank")
    setIsSharing(true)
    setTimeout(() => setIsSharing(false), 2000)
    toast({
      title: "Shared on Twitter",
      description: "Your achievement has been shared!",
    })
  }

  const shareOnLinkedIn = () => {
    const linkedInText = `I just completed today's coding challenge on Code 365! My current streak is ${streak} days. Join me in mastering DSA! ${url}`
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(linkedInText)}`
    window.open(linkedInUrl, "_blank")
    setIsSharing(true)
    setTimeout(() => setIsSharing(false), 2000)
    toast({
      title: "Shared on LinkedIn",
      description: "Your achievement has been shared!",
    })
  }

  return (
    <div className="flex space-x-4">
      <Button onClick={shareOnTwitter} disabled={isSharing} className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white">
        <Twitter className="mr-2 h-4 w-4" />
        Share on Twitter
      </Button>
      <Button onClick={shareOnLinkedIn} disabled={isSharing} className="bg-[#0077B5] hover:bg-[#006699] text-white">
        <Linkedin className="mr-2 h-4 w-4" />
        Share on LinkedIn
      </Button>
    </div>
  )
}

