import { styled } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 0.5rem;

  thead tr {
    color: ${({ theme }) => theme['gray-300']};
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`
