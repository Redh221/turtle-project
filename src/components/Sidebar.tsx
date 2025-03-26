import React from "react";
import Link from "next/link";
import { getUser } from "@/actions/user.action";

interface SidebarProps {
  avatarUrl?: string;
  userName?: string;
  email?: string;
}

export default async function Sidebar({
  avatarUrl = "/default-avatar.png",
  userName = "User Name",
  email = "user@example.com",
}: SidebarProps) {
  const user = await getUser();
  console.log(user);
  return (
    <aside className="w-64 h-full bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex flex-col items-center">
        <img
          src={user?.image || "@no photo"}
          // todo add no photo blank image
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {userName}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link
              href="/profile"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              Профиль
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              Настройки
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              Выход
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
