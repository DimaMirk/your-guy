import { useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AddBalanceSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="link" onClick={() => setOpen(true)}>
        Змінити баланс
      </Button>

      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        title="Баланс на місяць"
      >
        <div className="space-y-4">
          <Input placeholder="Сума" type="number" />

          <Button className="w-full">
            Зберегти
          </Button>
        </div>
      </BottomSheet>
    </>
  );
}
