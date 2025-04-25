"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  LogOut,
  Package,
  Settings,
  ShoppingBag,
  Truck,
  User,
  Users,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import chevronLeft from "../assets/icons/fi_chevrons-left.png";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  hasSubmenu?: boolean;
};

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems: NavItem[] = [
    {
      label: "User Management",
      icon: <Users className="h-5 w-5" />,
      href: "#",
      hasSubmenu: true,
    },
    {
      label: "Booking",
      icon: <ShoppingBag className="h-5 w-5" />,
      href: "#",
      active: true,
    },
    {
      label: "Agent",
      icon: <User className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Supplier",
      icon: <Truck className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Product",
      icon: <Package className="h-5 w-5" />,
      href: "#",
      hasSubmenu: true,
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Help",
      icon: <HelpCircle className="h-5 w-5" />,
      href: "#",
    },
  ];

  return (
    <div className="w-[250px] min-h-screen bg-[#181819] border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800 flex items-center">
        <div className="flex items-center">
          <img src={logo} />
        </div>
        <button
          className="ml-auto text-gray-400 hover:text-white"
          onClick={() => setCollapsed(!collapsed)}
        >
          <img src={chevronLeft} alt="Toggle Sidebar" className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1 p-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a] hover:text-white rounded-md",
                  item.active && "bg-[#e91e63] text-white hover:bg-[#d81b60]"
                )}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
                {item.hasSubmenu && <ChevronDown className="ml-auto h-4 w-4" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center text-sm text-gray-300 hover:text-white">
          <LogOut className="h-5 w-5 mr-3" />
          Log Out
        </button>
      </div>
    </div>
  );
}
