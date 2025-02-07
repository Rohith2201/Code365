import { CompanyQuestions } from '@/components/company-questions'
import { loadCompanyQuestions, getCompanyQuestions } from '@/lib/company-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitter - Code 365',
  description: 'Twitter Company Questions',
  keywords: 'Twitter, Company Questions, Interview Questions',
}

export default async function TwitterProblemsPage() {
  const data = await loadCompanyQuestions();
  const TwitterQuestions = getCompanyQuestions('Twitter', data);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
     <title>Twitter - Code 365</title>
      <meta name="description" content="Twitter Company Questions" />
      <meta name="keywords" content="Twitter, Company Questions, Interview Questions" />
      <meta name="author" content="Code 365 Team" />
      <CompanyQuestions companyName="Twitter" questions={TwitterQuestions} />
    </div>
  );
}

