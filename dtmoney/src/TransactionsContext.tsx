import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface transaction {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

interface transactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<transaction[]>([])

export function TransactionProvider({ children }: transactionProviderProps) {
  const [transactions, setTransactions] = useState<transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}
