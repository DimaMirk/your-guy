import { TodayHeader } from "./TodayHeader";
import { TodayHero } from "./TodayHero";
import { TodayStats } from "./TodayStats";
import { TodayMonthBalance } from "./TodayMonthBalance";
import { TodayExpenses } from "./TodayExpenses";
import { TodayActions } from "./TodayActions";

export function TodayPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-6 space-y-6">
      <TodayHeader />
      {/* <TodayHero /> */}
      {/* <TodayStats />
      <TodayMonthBalance />
      <TodayExpenses /> */}
      <TodayActions />
    </main>
  );
}

