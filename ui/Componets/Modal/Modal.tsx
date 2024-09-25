import {Button} from '@/ui/Componets/Button/Button';
import styled from 'styled-components';
import {SubTitle} from '@/ui/Main/Sections/SelectSection';
import {Name} from '@/ui/Componets/Block/Block';
import closeIcon from '@/public/icons/closeIcon.svg'
import Image from 'next/image';

const modalData = {
    title: 'Your name',
    text: 'Your information is 100% secure. We don’t share your personal information.',
    buttonName: 'Continue',
}

type Props = {
    userName: string
}

export const Modal = (props: Props) => {
    const {title, text, buttonName} = modalData

    const {userName} = props

    return (
        <Wrapper>
            <ButtonClose><Image src={closeIcon} alt={'close'}/></ButtonClose>
            <ModalTitle>{title}</ModalTitle>
            <UserName>{userName}</UserName>
            <Input type="email" placeholder={'Enter your email'}/>
            <Text>{text}</Text>
            <Button buttonName={buttonName}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ModalTitle = styled(SubTitle)`
  padding-bottom: 16px;
  border-bottom: 1px solid #F8F8F8;
  margin-bottom: 16px;
`

const Input = styled.input`
  border-radius: 16px;
  border: 1px solid #646464;
  background-color: #F8F8F8;
  padding: 14px 16px 20px;
  margin-bottom: 8px;
  
  &::placeholder {
    color: #B5B5B5;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    transition: opacity 0.3s;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`

const UserName = styled(Name)`
  font-weight: 500;
  margin-left: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #F8F8F8;
  margin-bottom: 16px;
`

const Text = styled.p`
  color: #646464;
  font-size: 13px;
  font-weight: 500;
  line-height: 138.462%;
  opacity: 0.5;
  position: relative;
  padding-left: 24px;
  margin-bottom: 40px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: url("/icons/lock.svg") center no-repeat;
  }
`

const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin-bottom: 16px;
`