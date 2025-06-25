import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slots = await prisma.availableSlot.findMany({
    include: {
      room: true,
    },
  });
  res.status(200).json(slots);
}