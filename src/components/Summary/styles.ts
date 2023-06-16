import { styled, css } from 'styled-components'

export const SummaryContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  margin-top: -5.7rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1180px) {
    max-width: 90%;

    overflow: auto;
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  min-width: 17.5rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;

    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${({ theme }) => theme['green-700']};
    `}
`
