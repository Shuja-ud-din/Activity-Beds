"use client";

import { Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface BookingFiltersProps {
  filters: {
    agent: string;
    supplier: string;
    bookingId: string;
    leadPaxName: string;
    bookingStatus: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onApply: () => void;
}

export function BookingFilters({
  filters,
  onFilterChange,
  onApply,
}: BookingFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Select
        value={filters.agent}
        onValueChange={(value) => onFilterChange("agent", value)}
      >
        <SelectTrigger className="w-[180px] bg-[#2a2a2a] border-gray-700">
          <SelectValue placeholder="Agent..." />
        </SelectTrigger>
        <SelectContent className="bg-[#2a2a2a] border-gray-700">
          <SelectItem value="abc">ABC Pvt. Ltd.</SelectItem>
          <SelectItem value="xyz">XYZ Corp</SelectItem>
          <SelectItem value="123">123 Travel</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.supplier}
        onValueChange={(value) => onFilterChange("supplier", value)}
      >
        <SelectTrigger className="w-[180px] bg-[#2a2a2a] border-gray-700">
          <SelectValue placeholder="Supplier..." />
        </SelectTrigger>
        <SelectContent className="bg-[#2a2a2a] border-gray-700">
          <SelectItem value="api">API</SelectItem>
          <SelectItem value="aqi">AQI</SelectItem>
          <SelectItem value="direct">Direct</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.bookingId}
        onValueChange={(value) => onFilterChange("bookingId", value)}
      >
        <SelectTrigger className="w-[180px] bg-[#2a2a2a] border-gray-700">
          <SelectValue placeholder="Booking ID..." />
        </SelectTrigger>
        <SelectContent className="bg-[#2a2a2a] border-gray-700">
          <SelectItem value="ab_us_001">AB_US_001</SelectItem>
          <SelectItem value="ab_us_002">AB_US_002</SelectItem>
          <SelectItem value="ab_us_003">AB_US_003</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.leadPaxName}
        onValueChange={(value) => onFilterChange("leadPaxName", value)}
      >
        <SelectTrigger className="w-[180px] bg-[#2a2a2a] border-gray-700">
          <SelectValue placeholder="Lead Pax Name..." />
        </SelectTrigger>
        <SelectContent className="bg-[#2a2a2a] border-gray-700">
          <SelectItem value="rahul">Rahul Sharma</SelectItem>
          <SelectItem value="amit">Amit Kumar</SelectItem>
          <SelectItem value="priya">Priya Singh</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.bookingStatus}
        onValueChange={(value) => onFilterChange("bookingStatus", value)}
      >
        <SelectTrigger className="w-[180px] bg-[#2a2a2a] border-gray-700">
          <SelectValue placeholder="Booking Status" />
        </SelectTrigger>
        <SelectContent className="bg-[#2a2a2a] border-gray-700">
          <SelectItem value="confirmed">Confirmed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
          <SelectItem value="vouchered">Vouchered</SelectItem>
          <SelectItem value="travelled">Travelled</SelectItem>
        </SelectContent>
      </Select>

      <Button className="bg-[#e91e63] hover:bg-[#d81b60]" onClick={onApply}>
        Apply
      </Button>

      <Button variant="outline" className="border-gray-700 gap-2">
        <Filter className="h-4 w-4" />
        Filters
      </Button>
    </div>
  );
}
