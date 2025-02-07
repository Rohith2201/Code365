export interface CompanyQuestion {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  url: string;
  topics: string[];
  companies: string[];
}

export interface Company {
  name: string;
  questions: CompanyQuestion[];
}

export interface CompanyData {
  companies: Company[];
}

export enum EventType {
  Hackathon = "Hackathon",
  TechFest = "Tech Fest",
  Bootcamp = "Bootcamp",
  Workshop = "Workshop",
}

export interface Event {
  id: string;
  title: string;
  type: EventType;
  startDate: string;
  endDate: string;
  applicationDeadline: string;
  applyLink: string;
  description: string;
  posterUrl: string;
  location: string;
}

