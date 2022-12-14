import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

type transactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface transactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: transactionInput) => Promise<void>
}

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionProvider({ children }: transactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: transactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function UseTransactions() {
  const context = useContext(TransactionContext)
  return context
}
