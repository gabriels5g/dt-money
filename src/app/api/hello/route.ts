import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    id: 1,
    title: "Transaction 1",
    amount: 400,
    type: "deposit",
    category: "Food",
    createdAt: new Date(),
  });
}
