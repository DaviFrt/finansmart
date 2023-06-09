import { styled } from 'styled-components'

export const MonthSelectorContainer = styled.div`
  max-width: 70rem;
  margin: 2rem auto 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
`

export const Button = styled.button`
  background-color: transparent;
  padding: 0.8rem;
`
