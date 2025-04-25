"use client";

import { useState, useEffect } from "react";
import { Booking } from "../types/booking";
import { mockBookings } from "../data/mock-bookings";
interface UseBookingsProps {
  agent: string;
  supplier: string;
  bookingId: string;
  leadPaxName: string;
  bookingStatus: string;
}

export function useBookings(filters: UseBookingsProps, page = 1) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Simulate API call with delay
    const timer = setTimeout(() => {
      let filteredBookings = [...mockBookings];

      // Apply filters
      if (filters.agent) {
        filteredBookings = filteredBookings.filter((booking) =>
          booking.agent.name.toLowerCase().includes(filters.agent.toLowerCase())
        );
      }

      if (filters.supplier) {
        filteredBookings = filteredBookings.filter((booking) =>
          booking.source.toLowerCase().includes(filters.supplier.toLowerCase())
        );
      }

      if (filters.bookingId) {
        filteredBookings = filteredBookings.filter((booking) =>
          booking.bookingId
            .toLowerCase()
            .includes(filters.bookingId.toLowerCase())
        );
      }

      if (filters.leadPaxName) {
        filteredBookings = filteredBookings.filter((booking) =>
          booking.leadPaxName
            .toLowerCase()
            .includes(filters.leadPaxName.toLowerCase())
        );
      }

      if (filters.bookingStatus) {
        filteredBookings = filteredBookings.filter(
          (booking) =>
            booking.status.toLowerCase() === filters.bookingStatus.toLowerCase()
        );
      }

      // Store total count before pagination
      setTotalResults(filteredBookings.length);

      // Apply pagination
      const itemsPerPage = 15;
      const startIndex = (page - 1) * itemsPerPage;
      const paginatedBookings = filteredBookings.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      setBookings(paginatedBookings);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters, page]);

  return { bookings, totalResults, isLoading };
}
