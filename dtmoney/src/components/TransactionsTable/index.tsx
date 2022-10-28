import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './style'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Hambúrguer</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>03/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
