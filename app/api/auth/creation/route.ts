import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()

  if(!user || user === null || !user.id)  {
    throw new Error('Something went wrong...')
  }

  let dbUser = await prisma.user.findUnique({
    where: {
        id: user.id,
    },
  });

  if (!dbUser) {
    dbUser= await prisma.user.create({
        data: {
            id: user.id,
            firstname: user.given_name ?? '',
            lastName: user.family_name ?? '',
            email: user.email ?? '',
            profileimage: user.picture,
        },
    });
  }

  return NextResponse.redirect('http://localhost:3000/guestbook')
}