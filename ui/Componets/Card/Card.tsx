import styled from 'styled-components';
import Image, {StaticImageData} from 'next/image';

type Props = {
    image: StaticImageData
    title: JSX.Element
    text: string
    isLast: boolean;
}

export const Card = (props: Props) => {
    const {image, text, title, isLast} = props

    return (
        <Wrapper isLast={isLast}>
            <Image src={image} alt={'icon'}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.article<{isLast: boolean }>`
  padding: 16px 0;
  border-top: 1px solid #646464;
  border-bottom: ${({ isLast }) => (isLast ? '1px solid #646464' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`

const Title = styled.div`
  color: #FF5D17;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 121.429%;
  text-transform: uppercase;
  
  & > span {
    color: #3177F2
  }
`

const Text = styled.div`
  color: #646464;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%; 
`