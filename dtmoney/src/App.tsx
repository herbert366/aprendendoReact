import { useState } from 'react'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './style/global'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)
  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Nova transação meu bom :) </h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}
