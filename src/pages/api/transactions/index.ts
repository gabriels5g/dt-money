import { prisma } from "@/infra/database/prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Transaction = {
  title: string;
  amount: number;
  category: string;
  type: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  if (req.method === "GET") {
    const transaction = await prisma.transaction.findMany();
    const formattedTransaction = transaction.map((t) => {
      return {
        ...t,
        value: Number(t.amount),
      };
    });

    return res.status(200).json(formattedTransaction);
  }
}
