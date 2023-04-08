import search from "@/assets/search.svg";
import { useTransactions } from "@/hooks/useTransactions";
import Image from "next/image";
import { Container, Contente } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
                }).format(transactions.amount)}
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
