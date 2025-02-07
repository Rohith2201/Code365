import { CompanyQuestions } from '@/components/company-questions'
import { loadCompanyQuestions, getCompanyQuestions } from '@/lib/company-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facebook - Code 365',
  description: 'Facebook Company Questions',
  keywords: 'Facebook, Company Questions, Interview Questions',
}

export default async function FacebookProblemsPage() {
  const data = await loadCompanyQuestions();
  const facebookQuestions = getCompanyQuestions('Facebook', data);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
    <title>Facebook - Code 365</title>
      <meta name="description" content="Facebook Company Questions" />
      <meta name="keywords" content="Facebook, Company Questions, Interview Questions" />
      <meta name="author" content="Code 365 Team" />
      <CompanyQuestions companyName="Facebook" questions={facebookQuestions} />
    </div>
  );
}

