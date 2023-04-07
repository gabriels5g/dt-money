import { prisma } from "@/infra/database/prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  value: number;
  category: string;
  type: string;
  createdAt: Data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { title, value, category, type } = req.body;

    await prisma.transaction.create({
      data: {
        title,
        value,
        category,
        type,
        createdAt: new Date(),
      },
    });

    console.log(req.body);
    res.status(201).json(req.body);
  }
}
