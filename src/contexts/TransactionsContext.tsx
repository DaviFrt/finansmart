import { ReactNode, createContext, useEffect, useState } from 'react'
import { Transaction } from '../@types/Transaction'

interface TransactionContext {
  transactions: Transaction[]
  onCreateTransaction: (data: Transaction) => void
}

interface TransactionContextProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContext)

export function TransactionsContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] =
    useState<Transaction[]>(getTransactions)

  function getTransactions() {
    const storedDataAsJSON = localStorage.getItem(
      '@finansmart:transactions-1.0.0',
    )

    if (storedDataAsJSON) {
      const response = JSON.parse(storedDataAsJSON)
      console.log(response)
      return response
    }

    return []
  }

  useEffect(() => {
    const stateJson = JSON.stringify(transactions)

    localStorage.setItem('@finansmart:transactions-1.0.0', stateJson)
  }, [transactions])

  function onCreateTransaction(data: Transaction) {
    setTransactions((state) => [data, ...state])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, onCreateTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
