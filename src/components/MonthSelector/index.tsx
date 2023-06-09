import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { Button, MonthSelectorContainer } from './styles'
import { useContext } from 'react'
import { DateContext } from '../../contexts/DateContext'
import { getFormattedCurrentMonth } from '../../utils/dateFilter'
import { format } from 'date-fns'

export function MonthSelector() {
  const { currentMonth, onMonthChange } = useContext(DateContext)

  function handlePreviousMonth() {
    const [month, year] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)

    currentDate.setMonth(currentDate.getMonth() - 1)

    const formatDate = format(currentDate, 'MM - yyyy')
    onMonthChange(`${formatDate}`)
  }

  function handleNextMonth() {
    const [month, year] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)

    currentDate.setMonth(currentDate.getMonth() + 1)

    const formatDate = format(currentDate, 'MM - yyyy')
    onMonthChange(`${formatDate}`)
  }

  return (
    <MonthSelectorContainer>
      <Button onClick={handlePreviousMonth}>
        <ArrowLeft size={24} color="#00875F" />
      </Button>
      <h2>{getFormattedCurrentMonth(currentMonth)}</h2>
      <Button onClick={handleNextMonth}>
        <ArrowRight size={24} color="#00875F" />
      </Button>
    </MonthSelectorContainer>
  )
}
