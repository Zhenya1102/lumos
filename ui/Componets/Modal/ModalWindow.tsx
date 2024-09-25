import styled from 'styled-components';
import closeIcon from '@/public/icons/closeIcon.svg'
import Image from 'next/image';
import {ReactNode} from 'react';
import {createPortal} from 'react-dom';
import {useOverflowHidden} from '@/assets/hooks/useOverflowHidden';


type Props = {
    children: ReactNode
    closeModal: () => void
    isOpen: boolean
}

export const ModalWindow = (props: Props) => {
    const {children, closeModal, isOpen} = props

    useOverflowHidden(isOpen)

    if (!isOpen) return null;

    const modalRoot = document.getElementById('modal-root');

    const closeModalHandler = () => {
        closeModal()
    }

    const handleContentClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    }

    if (!modalRoot) return null;

    return createPortal(<Wrapper id={'modal'} onClick={closeModalHandler}>
        <Container>
            <ButtonClose onClick={closeModal}><Image src={closeIcon} alt={'close'}/></ButtonClose>
            <Children onClick={handleContentClick}>{children}</Children>
        </Container>
    </Wrapper>, modalRoot)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const Container = styled.div`
  max-width: 892px;
  min-width: 48%;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  
`

const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin-bottom: 16px;
`

const Children = styled.div`
  display: flex;
  flex-direction: column;
`