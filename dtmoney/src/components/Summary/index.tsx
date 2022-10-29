import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../hooks/UseTransactions'
import { Container } from './style'

export function Summary() {
  const { transactions } = useContext(TransactionContext)
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income img" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="outcome img" />
        </header>
        <strong>R$ -500,00</strong>
      </div>
      <div className="highligh-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total img" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
