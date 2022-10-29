import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'App',
          type: 'deposit',
          category: 'Dev',
          amount: '2000',
          createdAt: new Date('2001-30-03 23:59:00'),
        },
        {
          id: 2,
          title: 'Pipoca',
          type: 'withdraw',
          category: 'Lanche',
          amount: '20',
          createdAt: new Date('2010-30-03 23:59:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
