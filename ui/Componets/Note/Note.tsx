import styled from '@emotion/styled'

type Props = {
    note: JSX.Element
}

export const Note = (props: Props) => {
    const {note} = props

    return (
        <Label>{note}</Label>
    )
}

const Label = styled.div`
  color: #3177F2;
  text-align: center;
  font-size: 14px;
  line-height: 128.571%;
  position: relative;
  min-width: 136px;
  min-height: 42px;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  
  & > span:last-child {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 42px;
    top: 0;
  }

  &::before {
    left: 0;
    background: url("/icons/left.svg") center no-repeat;
  }

  &::after {
    right: 0;
    background: url("/icons/right.svg") center no-repeat;
  }
`