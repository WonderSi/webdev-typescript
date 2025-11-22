type Invoice = {
  id: string
  amount: number
  status: 'paid' | 'free'
}

function sumByStatus(invoices: Invoice[]): { paid: number; free: number } {
  return invoices.reduce(
    (acc, invoice) => {
      acc[invoice.status] += invoice.amount
      return acc
    },
    { paid: 0, free: 0 }
  )
}

const myInvoices: Invoice[] = [
  { id: '1', amount: 100, status: 'paid' },
  { id: '2', amount: 50, status: 'free' },
  { id: '3', amount: 25, status: 'paid' },
  { id: '4', amount: 0, status: 'free' },
  { id: '5', amount: 150, status: 'free' }
]

const summary = sumByStatus(myInvoices)
console.log('Initial: ', myInvoices.length)
console.log('Result: ', summary)
