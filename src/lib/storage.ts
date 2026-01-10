const STORAGE_KEY = "spend-today:data";

export type StoredFinanceData = {
  monthBalance: number;
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: string;
  }[];
};

export function loadFinanceData(): StoredFinanceData {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      monthBalance: 0,
      expenses: [],
    };
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {
      monthBalance: 0,
      expenses: [],
    };
  }
}

export function saveFinanceData(data: StoredFinanceData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
