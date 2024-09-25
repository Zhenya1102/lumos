import styled from 'styled-components';
import mainImage from '@/public/mainSection/mainImage.svg'
import Image from 'next/image';
import {Button} from '@/ui/Componets/Button/Button';
import {Note} from '@/ui/Componets/Note/Note';
import {Block} from '@/ui/Componets/Block/Block';
import React from 'react';
import {LocationIcon} from '@/public/svgComponets/LocationIcon';
import {SquareIcon} from '@/public/svgComponets/SquareIcon';

const mainSectionData = {
    title: <>Access<span> everything securely</span> with<br/>VPN</>,
    buttonName: 'Get VPN',
    note: <>Trusted by<br/><span>50M+ Users</span></>,
    units: [
        {
            icon: <LocationIcon/>,
            title: '50+',
            note: 'Locations'
        },
        {
            icon: <SquareIcon/>,
            title: '1000+',
            note: 'Servers'
        }
    ],
    text: <>VPN-your<a href={'#'} target="_blank"> ultimate </a>solution for a private and secure online experience!</>
}

export const MainSection = () => {
    const {title, buttonName, note, units, text} = mainSectionData

    return (
        <Wrapper>
            <Title>{title}</Title>
            <ImageContainer><Image src={mainImage} alt={'stepIcon'}/></ImageContainer>
            <Items>
                <a href={'#anchor'}><Button buttonName={buttonName}/></a>
                <Note note={note}/>
                <Block units={units}/>
                <Text>{text}</Text>
            </Items>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 72px;

  @media (max-width: 428px) {
    margin-bottom: 40px;
  }
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  width: 100%;
  
  & button {
    align-self: center;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 143.75%;
  max-width: 396px;
  
  & span {
    color: #3177F2;
  }
`

const ImageContainer = styled.div`
  margin-bottom: 18px;
  position: relative;
  min-height: 210px;
  min-width: 428px;
  
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 427px) {
    min-height: 210px;
    min-width: 320px;
  }
`

const Text = styled.p`
  color: #646464;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  
  & > a {
    color: #3177F2;
  }
`