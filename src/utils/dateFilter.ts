import { format } from 'date-fns'
import { Transaction } from '../@types/Transaction'

export const getCurrentMonth = () => {
  const now = new Date()
  return format(now, 'MM - yyyy')
}

export const filterListByMonth = (
  list: Transaction[],
  date: string,
): Transaction[] => {
  const newList: Transaction[] = []
  const [month, year] = date.split('-')

  list.forEach((transaction) => {
    transaction.date = new Date(transaction.date)

    if (
      transaction.date.getFullYear() === parseInt(year) &&
      transaction.date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(transaction)
    }
  })

  return newList
}

export const getFormattedCurrentMonth = (currentMonth: string): string => {
  const [month, year] = currentMonth.split('-')
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  return `${months[parseInt(month) - 1]} - ${year}`
}
