import { useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AddExpenseSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        + Додати витрату
      </Button>

      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        title="Нова витрата"
      >
        <div className="space-y-4">
          <Input placeholder="Назва" />
          <Input placeholder="Сума" type="number" />

          <Button className="w-full">
            Зберегти
          </Button>
        </div>
      </BottomSheet>
    </>
  );
}
