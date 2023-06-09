import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { Cardholder } from 'phosphor-react'

import { CreateButton, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          <Cardholder size={36} />
          Finan<span>Smart</span>
        </h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CreateButton>Nova Transação</CreateButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
