import Image from "next/image";
import Modal from "react-modal";
import Close from "../../assets/close.svg";
import incomeImg from "../../assets/entrada.svg";
import outcomeImg from "../../assets/saida.svg";
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;

  onRequesteClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequesteClose,
}: NewTransactionModalProps) {
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
          <button type="button">
            <Image src={incomeImg} width={24} height={24} alt="entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            {" "}
            <Image src={outcomeImg} width={24} height={24} alt="entrada" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
