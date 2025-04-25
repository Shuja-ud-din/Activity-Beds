"use client";

import { SailboatIcon as Boat, Car } from "lucide-react";
import { Badge } from "../components/ui/badge";
import badge from "../assets/icons/Badge.png";
import type { Booking } from "../types/booking";
import { cn } from "../lib/utils";

interface BookingTableProps {
  bookings: Booking[];
  isLoading: boolean;
}

export function BookingTable({ bookings, isLoading }: BookingTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return (
          <Badge className="bg-green-500 hover:bg-green-600 text-white rounded-full px-3">
            Confirmed
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-500 hover:bg-red-600 text-white rounded-full px-3">
            Cancelled
          </Badge>
        );
      case "vouchered":
        return (
          <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-3">
            Vouchered
          </Badge>
        );
      case "travelled":
        return (
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3">
            Travelled
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-500 hover:bg-gray-600 text-white rounded-full px-3">
            {status}
          </Badge>
        );
    }
  };

  const getProductIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "boat":
        return <Boat className="h-5 w-5 text-cyan-400" />;
      case "car":
        return <Car className="h-5 w-5 text-yellow-400" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-400">Loading bookings...</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 text-left text-xs text-gray-400">
            <th className="p-3">Booking Status</th>
            <th className="p-3">Agent</th>
            <th className="p-3">Booking Source</th>
            <th className="p-3">Booking ID</th>
            <th className="p-3">Booking Date</th>
            <th className="p-3">Travel date</th>
            <th className="p-3">Lead Pax Name</th>
            <th className="p-3">Product Type</th>
            <th className="p-3">Booking Status</th>
            <th className="p-3">Product City</th>
            <th className="p-3">Name</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={index}
              className={cn(
                "border-b border-gray-800 text-sm hover:bg-[#333]",
                index % 2 === 0 ? "bg-[#2a2a2a]" : "bg-[#252525]"
              )}
            >
              <td className="p-3">
                <img src={badge} />
              </td>
              <td className="p-3">
                <div>
                  <div>{booking.agent.name}</div>
                  <div className="text-xs text-gray-400">
                    {booking.agent.manager}
                  </div>
                </div>
              </td>
              <td className="p-3">
                <Badge
                  variant="outline"
                  className={cn(
                    "rounded-full border-gray-700 px-3",
                    booking.source === "API"
                      ? "text-white"
                      : "bg-[#e91e63] text-white border-[#e91e63]"
                  )}
                >
                  {booking.source}
                </Badge>
              </td>
              <td className="p-3 text-[#e91e63]">{booking.bookingId}</td>
              <td className="p-3">{booking.bookingDate}</td>
              <td className="p-3">{booking.travelDate}</td>
              <td className="p-3">
                <div>
                  <div>{booking.leadPaxName}</div>
                  <div className="text-xs text-gray-400">
                    {booking.paxDetails}
                  </div>
                </div>
              </td>
              <td className="p-3">{getProductIcon(booking.productType)}</td>
              <td className="p-3">{getStatusBadge(booking.status)}</td>
              <td className="p-3">{booking.productCity}</td>
              <td className="p-3">
                <div className="text-xs text-gray-400">
                  {booking.airlineInfo}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
