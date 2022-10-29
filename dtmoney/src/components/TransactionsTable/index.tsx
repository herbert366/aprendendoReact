import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './style'

interface transaction {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
