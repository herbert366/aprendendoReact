import { GlobalStyle } from './style/global'
import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Header } from './components/Header'
import { TransactionProvider } from './hooks/useTransactions'
import { NewTransactionModal } from './components/NewTransactionModal'
import React from 'react'

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
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>

      <GlobalStyle />
    </TransactionProvider>
  )
}
