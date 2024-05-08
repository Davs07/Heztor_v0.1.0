// Control Page

interface Habit {
  id: number;
  name: string;
  description: string;
  category: string;
  frequency: string;
  priority: Priority;
}

interface FinancialRecord {
  id: number;
  description: string;
  amount: number;
  type: boolean; // income and expense
  idWaller: number;
}

interface Wallet {
  id: number;
  name: string;
  balance: number;
  transactions: FinancialRecord[];
}

export interface ControlCollection {
  id: number;
  habits: Habit[];
  wallet: Wallet;
}

// Managment Page

type Priority = "P1" | "P2" | "P3" | "P4";

interface Task {
  id: number;
  name: string;
  description?: string;
  dueDate: Date;
  priority: Priority;
  idProject?: number;
  status: boolean;
}

interface Event {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  idProject?: number;
  status: boolean;
}

interface Project {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
  events: Event[];
  favourite: boolean;
  idUser?: number;
  status: "to do" | "in progress" | "completed";
  startDate: Date;
  endDate: Date;
  priority: Priority;
}

export interface ManagementCollection {
  tasks: Task[];
  events: Event[];
  projects: Project[];
}

// Notion Page

interface DiaryEntry {
  id: number;
  date: Date;
  content: string;
}

interface Note {
  id: number;
  title: string;
  content: string;
  favourite: boolean;
}

export interface NotionCollection {
  diaryEntries: DiaryEntry[];
  notes: Note[];
}
