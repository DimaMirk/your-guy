import { useState, useEffect, useRef } from 'react';
import { BottomSheet } from './BottomSheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddBalanceSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (amount: number) => void;
  initialValue?: number | null;
}

export const AddBalanceSheet = ({
  open,
  onOpenChange,
  onSave,
  initialValue,
}: AddBalanceSheetProps) => {
  const [amount, setAmount] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setAmount(initialValue ? String(initialValue) : '');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, initialValue]);

  const handleSave = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onSave(value);
      onOpenChange(false);
    }
  };

  return (
    <BottomSheet
      open={open}
      onOpenChange={onOpenChange}
      title="Стартовий баланс"
      primaryLabel="Зберегти"
      onPrimaryClick={handleSave}
      primaryDisabled={!amount || parseFloat(amount) <= 0}
    >
      <div className="space-y-3">
        <Label htmlFor="balance" className="text-muted-foreground">
          Сума на початок місяця
        </Label>
        <Input
          ref={inputRef}
          id="balance"
          type="number"
          inputMode="decimal"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="h-14 text-2xl font-medium text-center"
        />
      </div>
    </BottomSheet>
  );
};
