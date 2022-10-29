import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { UseTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface newTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const { createTransaction } = UseTransactions()
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      type,
      title,
      amount,
      category,
    })

    setType('deposit')
    setTitle('')
    setAmount(0)
    setCategory('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close img" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Nova Transação</h2>
        <input
          placeholder="Descrição"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="entrada img" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="saída img" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
