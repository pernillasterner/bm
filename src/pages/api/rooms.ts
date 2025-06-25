import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rooms = await prisma.meetingRoom.findMany();
  res.status(200).json(rooms);
}