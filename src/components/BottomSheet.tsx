import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  primaryLabel: string;
  onPrimaryClick: () => void;
  primaryDisabled?: boolean;
}

export const BottomSheet = ({
  open,
  onOpenChange,
  title,
  children,
  primaryLabel,
  onPrimaryClick,
  primaryDisabled = false,
}: BottomSheetProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-xl font-semibold">{title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-2">{children}</div>
        <DrawerFooter className="gap-2 pb-safe-bottom">
          <Button 
            onClick={onPrimaryClick} 
            disabled={primaryDisabled}
            className="h-14 text-base font-medium"
          >
            {primaryLabel}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => onOpenChange(false)}
            className="h-12 text-muted-foreground"
          >
            Скасувати
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
