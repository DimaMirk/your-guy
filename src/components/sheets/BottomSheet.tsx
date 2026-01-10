import { ReactNode } from "react";
import { Drawer } from "vaul";

type BottomSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
};

export function BottomSheet({
  open,
  onOpenChange,
  title,
  children,
}: BottomSheetProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 rounded-t-2xl bg-white p-4">
          <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-muted" />
          <h2 className="mb-4 text-lg font-semibold">{title}</h2>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
