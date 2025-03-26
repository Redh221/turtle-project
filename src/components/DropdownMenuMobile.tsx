"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuMobile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      <DropdownMenu onOpenChange={(open) => setDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {dropdownOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => console.log("Option 1")}>
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Option 2")}>
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Option 3")}>
            Option 3
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
