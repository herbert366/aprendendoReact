import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface newTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
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
      <Container>
        <h2>Nova Transação</h2>
        <input placeholder="Descrição" />
        <input type="number" placeholder="Preço" />
        <input placeholder="Categoria" />
        <TransactionTypeContainer>
          <button className="income-button">
            <img src={incomeImg} alt="entrada img" />
            <span>Entrada</span>
          </button>
          <button className="income-button">
            <img src={outcomeImg} alt="saída img" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
