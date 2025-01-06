"use client";

import { type FC, useCallback } from "react";

import { getAurinkoAUthUrl } from "~/lib/aurinko";
import { EServiceType } from "~/types";

import { Button } from "./ui/button";

const LinkAccountButton: FC = () => {
  const linkAccountHandler = useCallback(async () => {
    const authUrl = await getAurinkoAUthUrl(EServiceType.Google);
    console.log(authUrl);
  }, []);

  return <Button onClick={linkAccountHandler}>Link Account</Button>;
};

export default LinkAccountButton;
