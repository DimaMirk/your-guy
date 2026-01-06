import { useState, useEffect, useCallback } from 'react';

export interface Expense {
  id: string;
  amount: number;
  category: string;
  comment?: string;
  date: string;
}

interface FinanceState {
  startBalance: number | null;
  expectedIncome: number | null;
  expenses: Expense[];
  currentMonth: string;
}

const STORAGE_KEY = 'finance-data';

const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
};

const getInitialState = (): FinanceState => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const currentMonth = getCurrentMonth();
  
  if (stored) {
    const parsed = JSON.parse(stored) as FinanceState;
    // Reset if month changed
    if (parsed.currentMonth !== currentMonth) {
      return {
        startBalance: null,
        expectedIncome: parsed.expectedIncome,
        expenses: [],
        currentMonth,
      };
    }
    return parsed;
  }
  
  return {
    startBalance: null,
    expectedIncome: null,
    expenses: [],
    currentMonth,
  };
};

export const useFinanceStore = () => {
  const [state, setState] = useState<FinanceState>(getInitialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setStartBalance = useCallback((amount: number) => {
    setState(prev => ({ ...prev, startBalance: amount }));
  }, []);

  const setExpectedIncome = useCallback((amount: number) => {
    setState(prev => ({ ...prev, expectedIncome: amount }));
  }, []);

  const addExpense = useCallback((expense: Omit<Expense, 'id' | 'date'>) => {
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    setState(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense],
    }));
  }, []);

  const getDaysInMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  };

  const getDaysLeft = () => {
    const now = new Date();
    const daysInMonth = getDaysInMonth();
    return daysInMonth - now.getDate() + 1; // Including today
  };

  const getTotalExpenses = () => {
    return state.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  };

  const getRemainingBalance = () => {
    if (state.startBalance === null) return null;
    return state.startBalance - getTotalExpenses();
  };

  const getDailyLimit = () => {
    const remaining = getRemainingBalance();
    if (remaining === null) return null;
    const daysLeft = getDaysLeft();
    return Math.floor(remaining / daysLeft);
  };

  const getTodayExpenses = () => {
    const today = new Date().toDateString();
    return state.expenses.filter(exp => 
      new Date(exp.date).toDateString() === today
    );
  };

  return {
    startBalance: state.startBalance,
    expectedIncome: state.expectedIncome,
    expenses: state.expenses,
    hasBalance: state.startBalance !== null,
    setStartBalance,
    setExpectedIncome,
    addExpense,
    getDaysLeft,
    getRemainingBalance,
    getDailyLimit,
    getTodayExpenses,
    getTotalExpenses,
  };
};
