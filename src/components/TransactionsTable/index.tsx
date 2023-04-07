import { TransactionContext } from "@/TransactionContext";
import search from "@/assets/search.svg";
import Image from "next/image";
import { useContext } from "react";
import { Container, Contente } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);

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
