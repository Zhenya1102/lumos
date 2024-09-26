import styled from '@emotion/styled'
import React, {useState} from 'react';
import {Checkbox} from '@/ui/Componets/Checkbox/Checkbox';

type Props = {
    units?: Unit[]
    userName?: string
    isUserName?: boolean
    isChecked?: boolean;
    onUserSelect?: (userName: string) => void;
}

export const Block = (props: Props) => {
    const {units, userName, isUserName, onUserSelect, isChecked} = props

    const unit = units?.map(({icon, note, title}) =>
        <Unit key={title}>
            {icon}
            <Items>
                <Title>{title}</Title>
                <Text>{note}</Text>
            </Items>
        </Unit>
    )

    const handleCheckboxChange = () => {
        if (userName && onUserSelect) {
            onUserSelect(userName)
        }
    }

    const checkboxId = `checkbox-${userName}`;

    return (
        <Wrapper isUserName={isUserName}>
            {units && <Content>{unit}</Content>}
            {userName && <Item>
                <Checkbox checked={isChecked}
                          onChange={handleCheckboxChange}
                          id={checkboxId}/>
                <Name>{userName}</Name>
            </Item>}
        </Wrapper>
    )
}

const Wrapper = styled.div<{ isUserName?: boolean }>`
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0 2.087px 11.061px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  min-height: 80px;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 ${({isUserName}) => isUserName ? 0 : 42.5}px;
  justify-content: ${({isUserName}) => isUserName ? 'flex-start' : 'center'};

  @media (max-width: 400px) {
    padding: 0 ${({isUserName}) => isUserName ? 0 : 15}px;
  }
`

const Item = styled.div`
  display: flex;
  padding-left: 10px;
`

export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  margin-left: 21px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  flex: 0 1 415px;
`

const Unit = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

const Items = styled.span`
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 133.333%;
`

const Text = styled.span`
  color: #646464;
  font-size: 14px;
  line-height: 128.571%;
`

// type
type Unit = {
    icon: JSX.Element
    title: string
    note: string
}
