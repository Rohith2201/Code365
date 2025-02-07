import { CompanyQuestions } from '@/components/company-questions'
import { loadCompanyQuestions, getCompanyQuestions } from '@/lib/company-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon - Code 365',
  description: 'Amazon Company Questions',
  keywords: 'Amazon, Company Questions, Interview Questions',
}

export default async function AmazonProblemsPage() {
  const data = await loadCompanyQuestions();
  const amazonQuestions = getCompanyQuestions('Amazon', data);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
    <title>Amazon - Code 365</title>
        <meta name="description" content="Amazon Company Questions" />
        <meta name="keywords" content="Amazon, Company Questions, Interview Questions" />
        <meta name="author" content="Code 365 Team" />
      <CompanyQuestions companyName="Amazon" questions={amazonQuestions} />
    </div>
  );
}

