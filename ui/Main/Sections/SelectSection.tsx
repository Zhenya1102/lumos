import styled from '@emotion/styled'
import {Button} from '@/ui/Componets/Button/Button';
import {useEffect, useState} from 'react';
import {UserWrapper} from '@/assets/types/ApiTypes';
import {Block, Name} from '@/ui/Componets/Block/Block';
import {ModalWindow} from '@/ui/Componets/Modal/ModalWindow';

const selectSectionData = {
    title: 'Millions of people trust us!',
    subTitle: <>Choose <span>your Name</span></>,
    buttonName: 'Get VPN',
    modalTitle: 'Your name',
    modalText: 'Your information is 100% secure. We don’t share your personal information.',
    buttonModalName: 'Continue',
}

export const SelectSection = () => {
    const {title, subTitle, buttonName, modalTitle, modalText, buttonModalName} = selectSectionData

    const [users, setUsers] = useState<UserWrapper[]>([])
    const [selectedUser, setSelectedUser] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('');

    const handleUserSelect = (userName: string) => {
        setSelectedUser(userName)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/0.8/?results=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openModal = () => {
        if (selectedUser) {
            setIsOpen(true);
        }
    }

    const closeModal = () => {
        setIsOpen(false);
        setEmail('');
    }

    const validateEmail = (inputEmail: string) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(inputEmail);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError('');
    }

    const handleSubmit = () => {
        if (validateEmail(email)) {
            console.log('Valid email:', email);
            setEmailError('');
            closeModal();
        } else {
            console.log('Please enter a valid email address.');
            setEmailError('Please enter a valid email address.');
        }
    }

    const userName = users.length > 0 ?
        users?.map(({user}: UserWrapper) => (
            <Block
                key={user.username}
                userName={`${user.name?.first} ${user.name?.last}`}
                isUserName
                isChecked={selectedUser === `${user.name.first} ${user.name.last}`}
                onUserSelect={handleUserSelect}/>
        )) : <p>Loading...</p>;

    return (
        <Wrapper>
            <Title id={'anchor'}>{title}</Title>
            <Content>
                <SubTitle>{subTitle}</SubTitle>
                {userName}
                <Button onClick={openModal} buttonName={buttonName}/>
            </Content>
            <ModalWindow closeModal={closeModal} isOpen={isOpen}>
                <ModalTitle>{modalTitle}</ModalTitle>
                <UserName>{selectedUser}</UserName>
                <Input type="email" placeholder={'Enter your email'} onChange={handleEmailChange}/>
                {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
                <Text>{modalText}</Text>
                <Button onClick={handleSubmit} buttonName={buttonModalName}/>
            </ModalWindow>
        </Wrapper>
    )
}

const ErrorMessage = styled.span`
    margin-bottom: 5px;
    font-size: 14px;
    color: #FF5D17;
`

const Wrapper = styled.section`
  margin-bottom: 93px;

  @media (max-width: 428px) {
    margin-bottom: 37px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

const Title = styled.h2`
  color: #3177F2;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 133.333%;
  margin-bottom: 72px;

  @media (max-width: 428px) {
    margin-bottom: 40px;
  }
`

export const SubTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 121.429%;
  text-transform: uppercase;
  
  & > span {
    color: #3177F2;
  }
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