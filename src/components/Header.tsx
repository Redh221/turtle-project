import Link from "next/link";
import { useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "./ui/themeSwitch";
import { Button } from "./ui/button";
import { syncUser } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import DropdownMenuMobile from "@/components/DropdownMenuMobile";

export default async function Header() {
  const user = await currentUser();
  if (user) await syncUser();
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      <Button>Test</Button>
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
        <DropdownMenuMobile />
      </div>
    </header>
  );
}
