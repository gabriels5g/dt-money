import { prisma } from "@/infra/database/prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: Data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, amount, category, type, createdAt }: Data = req.body;

    await prisma.transaction.create({
      data: {
        title,
        amount,
        category,
        type,
        createdAt: new Date(),
      },
    });

    console.log(req.body);
    res.status(201).json(req.body);
  }
}
