import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme['gray-800']};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);
  border-radius: 6px;

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;

      font-size: 1rem;

      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme.white};
    }
  }

  @media (max-width: 680px) {
    width: 100%;
    min-width: auto;
    height: 60%;

    position: relative;
    bottom: 0;
  }
`

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  margin-top: 1rem;
  padding: 1rem;

  font-size: 1rem;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;

  transition: 0.3s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-300']};
  }
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;

  background-color: ${({ theme }) => theme['gray-700']};
  border-radius: 6px;
  color: ${({ theme }) => theme['gray-300']};
  transition: 0.2s;

  svg {
    color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    background-color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-700'] : theme['red-700']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  color: ${({ theme }) => theme['gray-100']};

  position: absolute;
  top: 1rem;
  right: 1rem;
`
