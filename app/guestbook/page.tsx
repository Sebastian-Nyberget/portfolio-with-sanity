import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Form } from "../components/form";
import prisma from "../lib/db";

async function getGuestBookEntry() {
  const data = await prisma.guestBookEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileimage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
        createdAt: "desc",
    },
    take: 30,
  });
}

export default function GuestbookPage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="leading-7 text-muted-foreground mt-2">Sign my Guestbook!</p>

      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          <GuestbookForm />
        </CardHeader>
      </Card>
    </section>
  );
}

async function GuestbookForm() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return (
      <Form />
    )
  }

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
    <Input type="text" placeholder="Write message..." />
    <RegisterLink>
      <Button>
        Sign for free
      </Button>
    </RegisterLink>
  </div>
  )
}