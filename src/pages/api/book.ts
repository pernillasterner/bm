import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

// POST: Create a new booking
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST is allowed" });
  }

  try {
    const { slotId, name } = req.body;

    if (!slotId || !name) {
      return res.status(400).json({ error: "Missing slotId or name" });
    }

    const booking = await prisma.booking.create({
      data: {
        slotId,
        name,
      },
      include: {
        slot: {
          include: {
            room: true
          }
        }
      }
    });

    return res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
