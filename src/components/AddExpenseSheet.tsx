import { useState, useEffect, useRef } from 'react';
import { BottomSheet } from './BottomSheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'housing', label: 'Житло' },
  { id: 'food', label: 'Їжа' },
  { id: 'transport', label: 'Транспорт' },
  { id: 'entertainment', label: 'Розваги' },
  { id: 'subscriptions', label: 'Підписки' },
  { id: 'other', label: 'Інше' },
];

interface AddExpenseSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (expense: { amount: number; category: string; comment?: string }) => void;
}

export const AddExpenseSheet = ({
  open,
  onOpenChange,
  onSave,
}: AddExpenseSheetProps) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setAmount('');
      setCategory('');
      setComment('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSave = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0 && category) {
      onSave({
        amount: value,
        category,
        comment: comment.trim() || undefined,
      });
      onOpenChange(false);
    }
  };

  const isValid = amount && parseFloat(amount) > 0 && category;

  return (
    <BottomSheet
      open={open}
      onOpenChange={onOpenChange}
      title="Нова витрата"
      primaryLabel="Зберегти витрату"
      onPrimaryClick={handleSave}
      primaryDisabled={!isValid}
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-muted-foreground">
            Сума
          </Label>
          <Input
            ref={inputRef}
            id="amount"
            type="number"
            inputMode="decimal"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-14 text-2xl font-medium text-center"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-muted-foreground">Категорія</Label>
          <div className="grid grid-cols-3 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.label)}
                className={cn(
                  "h-11 rounded-lg border text-sm font-medium transition-colors",
                  category === cat.label
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment" className="text-muted-foreground">
            Коментар (необов'язково)
          </Label>
          <Textarea
            id="comment"
            placeholder="Додати опис..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="resize-none"
            rows={2}
          />
        </div>
      </div>
    </BottomSheet>
  );
};
