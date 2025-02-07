import { CompanyQuestions } from '@/components/company-questions'
import { loadCompanyQuestions, getCompanyQuestions } from '@/lib/company-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Netflix - Code 365',
  description: 'Netflix Company Questions',
  keywords: 'Netflix, Company Questions, Interview Questions',
}

export default async function NetflixProblemsPage() {
  const data = await loadCompanyQuestions();
  const netflixQuestions = getCompanyQuestions('Netflix', data);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
    <title>Netflix - Code 365</title>
      <meta name="description" content="Netflix Company Questions" />
      <meta name="keywords" content="Netflix, Company Questions, Interview Questions" />
      <meta name="author" content="Code 365 Team" />
      <CompanyQuestions companyName="Netflix" questions={netflixQuestions} />
    </div>
  );
}

