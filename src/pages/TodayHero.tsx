import { useFinanceStore } from "@/hooks/useFinanceStore";

export function TodayHero() {
  const dailyLimit = useFinanceStore((s) => s.dailyLimit);

  return (
    <section className="rounded-2xl bg-white shadow-sm p-6 text-center space-y-2">
      <p className="text-sm text-muted-foreground">
        Можеш витратити сьогодні
      </p>

      <p className="text-5xl font-bold text-green-700">
        {dailyLimit} ₴
      </p>
    </section>
  );
}
