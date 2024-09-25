'use client'
import styled from '@emotion/styled'
// import styled from 'styled-components';
import {Logo} from '@/ui/Header/Logo';

const buttonName = 'Get VPN'

export const Header = () => {
    return (
        <Wrapper>
            <Logo/>
            <Button href={'#anchor'}>{buttonName}</Button>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 18px 16px;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.14);
  z-index: 100;
  background-color: #FFFFFF;
`

const Button = styled.a`
  border-radius: 24px;
  background-color: #3177F2;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 128.571%;
  padding: 11px 26px;
  text-align: center;
  transition: background-color 0.3s;

  @media (hover: hover) {
    &:hover {
      background-color: #0056e8;
    }
  }

  &:active {
    background-color: #01399d;
  }
`