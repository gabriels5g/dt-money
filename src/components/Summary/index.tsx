import incomeImg from "@/assets/entrada.svg";
import outcomeImg from "@/assets/saida.svg";
import balance from "@/assets/total.svg";
import Image from "next/image";
import { Container } from "./styles";

export default function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <Image src={incomeImg} width={32} height={32} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <Image src={outcomeImg} width={32} height={32} alt="Entradas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <Image src={balance} width={32} height={32} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
