import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  height: 13.25rem;

  background-color: ${({ theme }) => theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;
  }

  h1 svg {
    margin-right: 0.5rem;
  }

  span {
    color: ${({ theme }) => theme['green-300']};
  }
`

export const CreateButton = styled.button`
  padding: 0.75rem 1.25rem;

  font-size: 1rem;
  font-weight: bold;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['green-500']};
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['green-300']};
  }
`
