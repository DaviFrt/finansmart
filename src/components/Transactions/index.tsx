import { useState, useEffect, useContext } from 'react'
import { Transaction } from '../../@types/Transaction'
import { filterListByMonth } from '../../utils/dateFilter'
import { formatMoney } from '../../utils/moneyFormat'
import { format } from 'date-fns'
import { DateContext } from '../../contexts/DateContext'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { currentMonth } = useContext(DateContext)
  const { transactions } = useContext(TransactionsContext)
  const [filteredList, setFilteredList] = useState<Transaction[]>([])

  useEffect(() => {
    setFilteredList(filterListByMonth(transactions, currentMonth))
  }, [transactions, currentMonth])

  return (
    <TransactionsContainer>
      <TransactionsTable>
        <thead>
          <tr>
            <td>Descrição</td>
            <td>Valor</td>
            <td>Categoria</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {formatMoney.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{format(transaction.date, 'dd/MM/yyyy')}</td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
