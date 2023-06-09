import { ReactNode, createContext, useState } from 'react'
import { getCurrentMonth } from '../utils/dateFilter'

interface DateContextType {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
}

interface DateContextProviderProps {
  children: ReactNode
}

export const DateContext = createContext({} as DateContextType)

export function DateContextProvider({ children }: DateContextProviderProps) {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  function onMonthChange(newMonth: string) {
    setCurrentMonth(newMonth)
  }

  return (
    <DateContext.Provider value={{ currentMonth, onMonthChange }}>
      {children}
    </DateContext.Provider>
  )
}
