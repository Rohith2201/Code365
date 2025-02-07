import { CompanyQuestions } from '@/components/company-questions'
import { loadCompanyQuestions, getCompanyQuestions } from '@/lib/company-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IBM - Code 365',
  description: 'IBM Company Questions',
  keywords: 'IBM, Company Questions, Interview Questions',
}

export default async function IbmProblemsPage() {
  const data = await loadCompanyQuestions();
  const ibmQuestions = getCompanyQuestions('Ibm', data);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
    <title>Ibm - Code 365</title>
      <meta name="description" content="Ibm Company Questions" />
      <meta name="keywords" content="Ibm, Company Questions, Interview Questions" />
      <meta name="author" content="Code 365 Team" />
      <CompanyQuestions companyName="IBM" questions={ibmQuestions} />
    </div>
  );
}

