"use client";

import { TransactionsProvider } from "@/TransactionContext";
import Dashboard from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { useState } from "react";
import { default as ReactModal } from "react-modal";

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

export default function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequesteClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
