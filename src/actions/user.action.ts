"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    if (!userId || !user) return null;
    const existingUser = await prisma.user.findFirst({
      where: { clerkId: userId },
    });

    if (existingUser) return existingUser;
    const dbUser = await prisma.user.create({
      data: {
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        clerkId: userId,
        image: user.imageUrl ?? null,
      },
    });
    return dbUser;
  } catch (error) {
    return null;
  }
}

export const getUser = async () => {
  const { userId } = await auth();
  if (userId) {
    let user = await prisma.user.findFirst({
      where: { clerkId: userId },
    });
    if (!user) {
      user = await syncUser();
    }
    return user;
  }
};
