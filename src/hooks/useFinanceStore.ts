import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  calculateDailyLimit,
  calculateTodayTotal,
  getDaysLeftInMonth,
} from "@/lib/finance-calculations";

type Expense = {
  id: string;
  title: string;
  amount: number;
  date: string;
};

type FinanceState = {
  monthBalance: number;
  expenses: Expense[];

  todayExpenses: Expense[];
  todayTotal: number;
  daysLeft: number;
  dailyLimit: number;

  addExpense: (title: string, amount: number) => void;
  updateMonthBalance: (value: number) => void;
};

export const useFinanceStore = create<FinanceState>()(
  persist(
    (set, get) => ({
      monthBalance: 0,
      expenses: [],

      get todayExpenses() {
        const today = new Date().toISOString().slice(0, 10);
        return get().expenses.filter((e) => e.date === today);
      },

      get todayTotal() {
        return calculateTodayTotal(get().todayExpenses);
      },

      get daysLeft() {
        return getDaysLeftInMonth();
      },

      get dailyLimit() {
        const { monthBalance, todayTotal, daysLeft } = get();
        return calculateDailyLimit(
          monthBalance - todayTotal,
          daysLeft
        );
      },

      addExpense: (title, amount) => {
        const today = new Date().toISOString().slice(0, 10);

        set((state) => ({
          expenses: [
            ...state.expenses,
            {
              id: crypto.randomUUID(),
              title,
              amount,
              date: today,
            },
          ],
        }));
      },

      updateMonthBalance: (value) => {
        set({ monthBalance: value });
      },
    }),
    {
      name: "finance-storage", // key в localStorage
    }
  )
);
