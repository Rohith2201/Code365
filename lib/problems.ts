export interface Problem {
  id: string;
  "Topic:": string;
  "Problem: ": string;
  "Done": string;
  "URL": string;
  companies: string[];
}

let problems: Problem[] = [];

export async function loadProblems(): Promise<Problem[]> {
  if (problems.length > 0) return problems;

  try {
    const response = await fetch('/api/problems');
    if (!response.ok) {
      throw new Error('Failed to fetch problems');
    }
    const data = await response.json();
    problems = data.Sheet1.map((item: any, index: number) => ({
      ...item,
      id: index.toString(),
      companies: item.companies ? item.companies.split(',').map((c: string) => c.trim()) : []
    }));
    return problems;
  } catch (error) {
    console.error('Error loading problems:', error);
    return [];
  }
}

export function groupProblemsByTopic(problems: Problem[]): Record<string, Problem[]> {
  return problems.reduce((acc, problem) => {
    const topic = problem["Topic:"]
    if (!acc[topic]) {
      acc[topic] = []
    }
    acc[topic].push(problem)
    return acc
  }, {} as Record<string, Problem[]>)
}

