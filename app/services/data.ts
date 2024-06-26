import {
  ControlCollection,
  ManagementCollection,
  NotionCollection,
} from "./type";

// Control Page

export const controlCollection: ControlCollection = {
  id: 1,
  habits: [
    {
      id: 1,
      name: "Morning Exercise",
      description: "30-minute workout routine",
      category: "Health",
      frequency: "Everyday",
      priority: "P1",
    },
    {
      id: 2,
      name: "Reading",
      description: "Read one chapter of a book",
      category: "Personal Development",
      frequency: "Everyday",
      priority: "P2",
    },
    {
      id: 3,
      name: "Meditation",
      description: "10-minute meditation session",
      category: "Mindfulness",
      frequency: "Everyday",
      priority: "P3",
    },
  ],
  wallet: {
    id: 1,
    name: "Main Wallet",
    balance: 5000,
    transactions: [
      { id: 1, description: "Salary", amount: 3000, type: true, idWaller: 1 }, // income
      { id: 2, description: "Rent", amount: 1000, type: false, idWaller: 1 }, // expense
      {
        id: 3,
        description: "Groceries",
        amount: 200,
        type: false,
        idWaller: 1,
      }, // expense
      {
        id: 4,
        description: "Freelance Work",
        amount: 1000,
        type: true,
        idWaller: 1,
      }, // income
    ],
  },
};

// Managment Page

export const managementCollection: ManagementCollection = {
  tasks: [
    {
      id: 1,
      name: "Update Website",
      dueDate: new Date("2024-05-15"),
      priority: "P1",
      status: false,
    },
    {
      id: 2,
      name: "Prepare Presentation",
      dueDate: new Date("2024-05-20"),
      priority: "P2",
      status: false,
      idProject: 2,
    },
    {
      id: 3,
      name: "Attend Meeting",
      dueDate: new Date("2024-05-10"),
      priority: "P3",
      status: true,
      idProject: 2,
    },
    {
      id: 4,
      name: "Write Report",
      dueDate: new Date("2024-05-30"),
      priority: "P4",
      status: false,
      idProject: 1,
    },
    {
      id: 5,
      name: "Complete Project",
      dueDate: new Date("2024-06-01"),
      priority: "P3",
      status: true,
      idProject: 1,
    },
  ],
  events: [
    {
      id: 1,
      name: "Team Building Retreat",
      description: "Annual company retreat",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-06-03"),
      status: false,
      idProject: 1,
    },
    {
      id: 1,
      name: "Go to the Gym",
      description: "Annual company retreat",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-06-03"),
      status: false,
      idProject: 1,
    },
    {
      id: 1,
      name: "English Class",
      description: "Annual company retreat",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-06-03"),
      status: false,
      idProject: 1,
    },
    {
      id: 2,
      name: "Conference",
      description: "Industry conference",
      startDate: new Date("2024-07-10"),
      endDate: new Date("2024-07-12"),
      status: true,
      idProject: 2,
    },
  ],
  projects: [
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesigning company website",
      favourite: true,
      status: "to do",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-05-15"),
      priority: "P1",
      tags: ["web", "code", "startup"],
    },
    {
      id: 2,
      name: "Product Launch",
      description: "Launching new product line",
      favourite: false,
      status: "in progress",
      startDate: new Date("2024-05-15"),
      endDate: new Date("2024-06-01"),
      priority: "P2",
      tags: ["fitness", "health"],
    },
  ],
};

// Notion Page

export const notionCollection: NotionCollection = {
  diaryEntries: [
    {
      id: 1,
      date: new Date("2024-05-05"),
      content: "Today I worked on my new project.",
    },
    {
      id: 2,
      date: new Date("2024-05-06"),
      content: "Attended a conference on software development.",
    },
  ],
  notes: [
    {
      id: 1,
      title: "Meeting Notes",
      content: "Notes from the team meeting.",
      favourite: true,
    },
    {
      id: 2,
      title: "Project Ideas",
      content: "Brainstorming ideas for the new project.",
      favourite: false,
    },
  ],
};
