import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { MonthSelector } from './components/MonthSelector'
import { Transactions } from './components/Transactions'
import { DateContextProvider } from './contexts/DateContext'
import { TransactionsContextProvider } from './contexts/TransactionsContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <Header />
        <Summary />
        <DateContextProvider>
          <MonthSelector />
          <Transactions />
        </DateContextProvider>
      </TransactionsContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
