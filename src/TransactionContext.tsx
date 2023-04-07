import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

// interface TransactionInput {
//   title: string;
//   value: number;
//   type: string;
//   category: string;

// }
// OR

type TransactionInput = Omit<Transaction, "id" | "createdAt">; //OR <Pick>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransacion] = useState<Transaction[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransacion(data));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("create", transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
