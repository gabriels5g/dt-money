"use client";

import search from "@/assets/search.svg";
import Image from "next/image";
import { Container, Contente } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>28/03/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.100</td>
            <td>Casa</td>
            <td>17/03/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
