export type Priority = "P1" | "P2" | "P3" | "P4";
// Control Page

export interface Habit {
  id: number;
  name: string;
  description: string;
  category: string;
  frequency: string;
  priority: Priority;
}

export interface FinancialRecord {
  id: number;
  description: string;
  amount: number;
  type: boolean; // income and expense
  idWaller: number;
}

export interface Wallet {
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

export interface Task {
  id: number;
  name: string;
  description?: string;
  dueDate: Date;
  priority: Priority;
  idProject?: number;
  status: boolean;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  idProject?: number;
  status: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  favourite: boolean;
  idUser?: number;
  status: "to do" | "in progress" | "completed";
  startDate: Date;
  endDate: Date;
  priority: Priority;
  tags: string[];
}

export interface ManagementCollection {
  tasks: Task[];
  events: Event[];
  projects: Project[];
}

// Notion Page

export interface DiaryEntry {
  id: number;
  date: Date;
  content: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  favourite: boolean;
}

export interface NotionCollection {
  diaryEntries: DiaryEntry[];
  notes: Note[];
}
