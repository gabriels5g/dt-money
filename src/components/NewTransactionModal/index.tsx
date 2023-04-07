import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import Close from "../../assets/close.svg";
import incomeImg from "../../assets/entrada.svg";
import incomeImgActive from "../../assets/entradaAtiva.svg";
import outcomeImg from "../../assets/saida.svg";
import outcomeImgActive from "../../assets/saidaAtiva.svg";

import { TransactionContext } from "@/TransactionContext";
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
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const { createTransaction } = useContext(TransactionContext);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      value,
      category,
      type,
    });
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <input
          type="text"
          placeholder="Descrição"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
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
