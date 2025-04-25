"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sidebar } from "./sidebar";
import { BookingTable } from "./booking-table";
import { BookingFilters } from "./booking-filters";
import { useBookings } from "../hooks/use-bookings";

export default function BookingDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    agent: "",
    supplier: "",
    bookingId: "",
    leadPaxName: "",
    bookingStatus: "",
  });

  const { bookings, totalResults, isLoading } = useBookings(
    filters,
    currentPage
  );

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    setCurrentPage(1);
    // The useBookings hook will automatically refetch with the new filters
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center p-4 border-b border-gray-800">
          <div className="flex items-center">
            <div className="bg-[#2a2a2a] p-2 rounded mr-4">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <h1 className="text-xl font-semibold">Booking</h1>
          </div>
          <Button
            className="ml-auto bg-[#e91e63] hover:bg-[#d81b60]"
            size="icon"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </header>

        <div className="p-4 bg-[#181819]" style={{ backgroundColor: "black" }}>
          <BookingFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onApply={handleApplyFilters}
          />

          <div className="mt-4 rounded-lg overflow-hidden">
            <BookingTable bookings={bookings} isLoading={isLoading} />

            <div className="p-4 flex items-center justify-between text-sm">
              <div className="text-gray-400">
                {isLoading
                  ? "Loading..."
                  : `${bookings.length} out of ${totalResults} results`}
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-gray-700"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1 || isLoading}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    className={`h-8 w-8 ${
                      currentPage === page
                        ? "bg-[#e91e63] hover:bg-[#d81b60]"
                        : "border-gray-700"
                    }`}
                    onClick={() => handlePageChange(page)}
                    disabled={isLoading}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-gray-700"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === 3 || isLoading}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
