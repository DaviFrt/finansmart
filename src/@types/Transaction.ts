export interface Transaction {
  id: string
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
  date: Date
}
