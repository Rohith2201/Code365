import { CompanyCard } from "@/components/company-card"

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png",
    questions: 150,
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1920px-Amazon_2024.svg.png",
    questions: 200,
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png",
    questions: 180,
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032",
    questions: 160,
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/880px-Apple_Computer_Logo_rainbow.svg.png",
    questions: 140,
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/611px-Netflix_icon.svg.png",
    questions: 120,
  },{
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
    questions: 100,
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Adobe-logo.svg/768px-Adobe-logo.svg.png",
    questions: 80,
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/900px-X_logo.jpg",
    questions: 60,
  },
]

export default function CompaniesPage() {
  return (
    <>
        <title>Companies - Code 365</title>
        <meta name="description" content="Company-wise Questions" />
        <meta name="keywords" content="Company Questions, Interview Questions" />
        <meta name="author" content="Code 365 Team" />
    
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient-primary">Company-wise Questions</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <CompanyCard
            key={company.name}
            name={company.name}
            logo={company.logo}
            questions={company.questions}
          />
        ))}
      </div>
    </div>
   </>
  )
}

