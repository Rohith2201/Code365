import { CompanyQuestions } from '@/components/company-questions'
import { loadCompanyQuestions, getCompanyQuestions } from '@/lib/company-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adobe - Code 365',
  description: 'Adobe Company Questions',
  keywords: 'Adobe, Company Questions, Interview Questions',
}

export default async function AdobeProblemsPage() {
  const data = await loadCompanyQuestions();
  const adobeQuestions = getCompanyQuestions('Adobe', data);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen p-8 rounded-lg shadow-lg">
    <title>Adobe - Code 365</title>
        <meta name="description" content="Adobe Company Questions" />
        <meta name="keywords" content="Adobe, Company Questions, Interview Questions" />
        <meta name="author" content="Code 365 Team" />
      <CompanyQuestions companyName="ADOBE" questions={adobeQuestions} />
    </div>
  );
}

