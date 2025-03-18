"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "./ui/themeSwitch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      <div className="flex items-center gap-4">
        <Link href="/">
          <span>Turtle Project</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />

        <div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton userProfileMode="modal" />
          </SignedIn>
        </div>

        {/* Dropdown меню - показывается только на мобильных устройствах */}
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
      </div>
    </header>
  );
}
