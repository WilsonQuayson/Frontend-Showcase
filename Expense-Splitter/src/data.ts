// data.ts

export type Member = {
  id: number;
  name: string;
  initials: string;
};

export type Group = {
  id: number;
  name: string;
  balance: number;
};

export type Activity = {
  id: number;
  type: "expense" | "settlement";
  title: string;
  amount: number;
  currency: "JPY" | "USD";
  paidBy?: string;
  paidTo?: string;
  date: string;
  category?: string;
};

export type Settlement = {
  id: number;
  from: string;
  to: string;
  amount: number;
  currency: "USD";
};

// -------------------------------------
// Members
// -------------------------------------

export const members: Member[] = [
  {
    id: 1,
    name: "Alex Chen",
    initials: "AC",
  },
  {
    id: 2,
    name: "Jordan Park",
    initials: "JP",
  },
  {
    id: 3,
    name: "Sam Rivera",
    initials: "SR",
  },
  {
    id: 4,
    name: "Taylor Kim",
    initials: "TK",
  },
];

// -------------------------------------
// Groups
// -------------------------------------

export const groups: Group[] = [
  {
    id: 1,
    name: "Trip to Japan",
    balance: 216.47,
  },
  {
    id: 2,
    name: "Apartment 4B",
    balance: 2267.09,
  },
  {
    id: 3,
    name: "Office Lunch Crew",
    balance: 19.5,
  },
  {
    id: 4,
    name: "Sarah's Birthday Present",
    balance: 0,
  },
  {
    id: 5,
    name: "Camping Weekend",
    balance: 177.79,
  },
];

// -------------------------------------
// Current group
// -------------------------------------

export const currentGroup = {
  id: 1,
  name: "Trip to Japan",
  description:
    "Two weeks in Tokyo, Kyoto, and Osaka. Cherry blossom season 2024.",

  totalSpent: 2751.24,
  expenseCount: 13,
  settlementCount: 2,

  members,

  summary: {
    owedToYou: 216.47,
    youPaid: 1123.04,
    yourShare: 756.58,
  },
};

// -------------------------------------
// Activity
// -------------------------------------

export const activities: Activity[] = [
  {
    id: 1,
    type: "expense",
    title: "Convenience store runs (accumulated)",
    amount: 8340,
    currency: "JPY",
    paidBy: "Sam Rivera",
    date: "Mar 27, 2024",
    category: "shopping",
  },
  {
    id: 2,
    type: "settlement",
    title: "Sam Rivera paid Taylor Kim",
    amount: 8500,
    currency: "JPY",
    paidBy: "Sam Rivera",
    paidTo: "Taylor Kim",
    date: "Mar 26, 2024",
  },
  {
    id: 3,
    type: "expense",
    title: "Osaka Castle entry",
    amount: 2400,
    currency: "JPY",
    paidBy: "Jordan Park",
    date: "Mar 26, 2024",
    category: "activity",
  },
  {
    id: 4,
    type: "expense",
    title: "Izakaya dinner in Dotonbori",
    amount: 42600,
    currency: "JPY",
    paidBy: "Alex Chen",
    date: "Mar 25, 2024",
    category: "food",
  },
  {
    id: 5,
    type: "expense",
    title: "Osaka street food tour",
    amount: 28000,
    currency: "JPY",
    paidBy: "Taylor Kim",
    date: "Mar 25, 2024",
    category: "food",
  },
  {
    id: 6,
    type: "settlement",
    title: "Jordan Park paid Alex Chen",
    amount: 150,
    currency: "USD",
    paidBy: "Jordan Park",
    paidTo: "Alex Chen",
    date: "Mar 24, 2024",
  },
];

// -------------------------------------
// Suggested settlements
// -------------------------------------

export const suggestedSettlements: Settlement[] = [
  {
    id: 1,
    from: "Jordan Park",
    to: "You",
    amount: 216.47,
    currency: "USD",
  },
  {
    id: 2,
    from: "Sam Rivera",
    to: "Taylor Kim",
    amount: 315.1,
    currency: "USD",
  },
  {
    id: 3,
    from: "Jordan Park",
    to: "Taylor Kim",
    amount: 3.03,
    currency: "USD",
  },
];