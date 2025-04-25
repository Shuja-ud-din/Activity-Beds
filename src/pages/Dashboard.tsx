import { ChevronLeft, ChevronRight } from "lucide-react";
import { BookingFilters } from "../components/booking-filters";
import { BookingTable } from "../components/booking-table";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useBookings } from "../hooks/use-bookings";

const Dashboard = () => {
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
    <div className="p-4">
      <BookingFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onApply={handleApplyFilters}
      />

      <div className="mt-4 bg-[#2a2a2a] rounded-lg overflow-hidden">
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
  );
};

export default Dashboard;
