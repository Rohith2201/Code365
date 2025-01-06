import { CompanyData, CompanyQuestion } from './types';
import path from 'path';
import fs from 'fs/promises';

export async function loadCompanyQuestions(): Promise<CompanyData> {
  try {
    const filePath = path.join(process.cwd(), 'lib', 'company-questions.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData) as CompanyData;
    return data;
  } catch (error) {
    console.error('Error loading company questions:', error);
    return { companies: [] };
  }
}

export function getCompanyQuestions(companyName: string, data: CompanyData): CompanyQuestion[] {
  const allQuestions: CompanyQuestion[] = [];
  data.companies.forEach(company => {
    company.questions.forEach(question => {
      if (question.companies.includes(companyName)) {
        allQuestions.push(question);
      }
    });
  });
  return allQuestions;
}

