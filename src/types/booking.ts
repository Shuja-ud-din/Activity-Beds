export interface Booking {
  avatarText: string
  avatarColor: string
  agent: {
    name: string
    manager: string
  }
  source: string
  bookingId: string
  bookingDate: string
  travelDate: string
  leadPaxName: string
  paxDetails: string
  productType: string
  status: string
  productCity: string
  airlineInfo: string
}
