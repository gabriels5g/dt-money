import { TransactionContext } from "@/TransactionContext";
import incomeImg from "@/assets/entrada.svg";
import outcomeImg from "@/assets/saida.svg";
import balance from "@/assets/total.svg";
import Image from "next/image";
import { useContext } from "react";
import { Container } from "./styles";

export default function Summary() {
  const { transactions } = useContext(TransactionContext);

  // const totalDeposit = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return acc + transaction.value;
  //   }

  //   return acc;
  // }, 0);

  // const totalWithdraw = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "withdraw") {
  //     return acc + transaction.value;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <Image src={incomeImg} width={32} height={32} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <Image src={outcomeImg} width={32} height={32} alt="Entradas" />
        </header>
        <strong>
          -{""}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <Image src={balance} width={32} height={32} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
