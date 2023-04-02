import Modal from "react-modal";

interface NewTransactionModalPrrops {
  isOpen: boolean;

  onRequesteClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequesteClose,
}: NewTransactionModalPrrops) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequesteClose}>
      <h2>cadastrar Transaction</h2>
    </Modal>
  );
}
