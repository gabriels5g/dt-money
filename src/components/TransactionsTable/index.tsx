"use client";

import search from "@/assets/search.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Contente } from "./styles";

interface TransactionProps {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransacion] = useState<TransactionProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransacion(data));
  }, []);

  return (
    <Container>
      <Contente>
        <input placeholder="Busque uma transação" type="text" />
        <button type="button">
          <Image src={search} width={20} height={20} alt="" />
          Buscar
        </button>
      </Contente>
      <table>
        <tbody>
          {transactions.map((transactions) => (
            <tr key={transactions.id}>
              <td>{transactions.title}</td>
              <td className={transactions.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transactions.value)}
              </td>
              <td>{transactions.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR", {}).format(
                  new Date(transactions.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
