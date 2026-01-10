export function getDaysLeftInMonth(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  return lastDay - date.getDate() + 1;
}

export function calculateTodayTotal(expenses: { amount: number }[]) {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function calculateDailyLimit(
  monthBalance: number,
  daysLeft: number
) {
  if (daysLeft <= 0) return 0;
  return Math.floor(monthBalance / daysLeft);
}
