// api/clerk/webhook

import { type User } from "@prisma/client";
import { db } from "~/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();

  const user: User = {
    id: data.id,
    email: data.email_addresses[0].email_address,
    firstName: data.first_name,
    lastName: data.last_name,
    imageUrl: data.image_url,
  };

  await db.user.create({ data: user });

  return new Response("Webhook Received", { status: 200 });
};
