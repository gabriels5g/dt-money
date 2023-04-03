import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import Close from "../../assets/close.svg";
import incomeImg from "../../assets/entrada.svg";
import outcomeImg from "../../assets/saida.svg";

import incomeImgActive from "../../assets/entradaAtiva.svg";
import outcomeImgActive from "../../assets/saidaAtiva.svg";
import {
  Container,
  RadioBoxDeposit,
  RadioBoxWithdraw,
  TransactionTypeContainer,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;

  onRequesteClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequesteClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequesteClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" onClick={onRequesteClose}>
        <Image src={Close} width={24} height={24} alt={""} />
      </button>
      <Container>
        <h2>Nova transação</h2>
        <input type="text" placeholder="Descrição" />
        <input type="number" placeholder="Preço" />

        <input type="number" placeholder="Categoria" />
        <TransactionTypeContainer>
          <RadioBoxDeposit
            type="button"
            isActive={type === "deposit"}
            onClick={() => {
              setType("deposit");
            }}
          >
            <Image
              className="imgWithdraw"
              src={type === "deposit" ? incomeImgActive : incomeImg}
              width={24}
              height={24}
              alt="entrada"
            />
            <span>Entrada</span>
          </RadioBoxDeposit>
          <RadioBoxWithdraw
            type="button"
            isActive={type === "withdraw"}
            onClick={() => {
              setType("withdraw");
            }}
          >
            <Image
              src={type === "withdraw" ? outcomeImgActive : outcomeImg}
              width={24}
              height={24}
              alt="saida"
            />
            <span>Saida</span>
          </RadioBoxWithdraw>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
