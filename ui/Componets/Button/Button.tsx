import styled from 'styled-components';

type Props = {
    buttonName: string
    onClick?: () => void
}

export const Button = (props: Props) => {
    const {buttonName, onClick} = props

    return (
        <Btn onClick={onClick}>{buttonName}</Btn>
    )
}

const Btn = styled.button`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 133.333%;
  border-radius: 16px;
  background-color: #FF5D17;
  padding: 16px 146px;
  color: #FFF;
  transition: background-color 0.3s;

  @media (hover: hover) {
    &:hover {
      background-color: #d03e00;
    }
  }

  &:active {
    background-color: #ff4e02;
  }

  @media (max-width: 422px) {
    font-size: 20px;
    padding: 16px 100px;
  }
`