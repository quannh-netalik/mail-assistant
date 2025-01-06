"use server";

import { auth } from "@clerk/nextjs/server";

import { type EServiceType } from "~/types";

// https://apirefs.aurinko.io/#tag/Messages
export const getAurinkoAUthUrl = async (serviceType: EServiceType) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const params = new URLSearchParams({
    clientId: process.env.AURINKO_CLIENT_ID!,
    serviceType,
    scopes: "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    responseType: "code",
    returnUrl: `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`,
  });

  return `${process.env.AURINKO_BASED_URL}/v1/auth/authorize?${params.toString()}`;
};
