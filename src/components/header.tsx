import { Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import createBooking from "../assets/icons/create-booking.png";

const Header = () => {
  return (
    <header className="flex items-center p-4">
      <div className="flex items-center">
        <div className=" p-2 rounded mr-4 bg-black">
          <img src={createBooking} alt="logo" className="h-5 w-5" />
        </div>
        <h1 className="text-xl font-semibold">Booking</h1>
      </div>
      <Button className="ml-auto bg-[#e91e63] hover:bg-[#d81b60]" size="icon">
        <Plus className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;
