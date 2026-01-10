import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TodayHeader() {
  return (
    <div className="flex justify-center">
      <Select defaultValue="2024-04">
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Оберіть місяць" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2024-04">Квітень 2024</SelectItem>
          <SelectItem value="2024-03">Березень 2024</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
