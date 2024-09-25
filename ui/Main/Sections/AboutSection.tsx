import image1 from '@/public/aboutSection/01.svg'
import image2 from '@/public/aboutSection/02.svg'
import image3 from '@/public/aboutSection/03.svg'
import image4 from '@/public/aboutSection/04.svg'
import {Card} from '@/ui/Componets/Card/Card';
import styled from 'styled-components';

const aboutSectionData = {
    units: [
        {
            image: image1,
            title: <>Unlimited<br/><span>access to content</span></>,
            text: 'Enjoy unlimited bandwidth to stay connected to the world\'s best shows, apps, and games!',
        },
        {
            image: image2,
            title: <>Flashing<br/><span>connecting speed</span></>,
            text: 'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!',
        },
        {
            image: image3,
            title: <>Hide<br/><span>your location</span></>,
            text: 'Get your own unique IP for added security and access to restricted sites, apps, and services!',
        },
        {
            image: image4,
            title: <>Bypass<br/><span>blocked sites</span></>,
            text: 'Access any website safely and anonymously!',
        },
    ]
}

export const AboutSection = () => {
    const {units} = aboutSectionData

    const unit = units.map(({image, title, text}, i)=>
        <Card
            key={i}
            image={image}
            title={title}
            text={text}
            isLast={i >= units.length - 2}/>
    )

    return (
        <Wrapper>{unit}</Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 8px;
  padding: 0 6px;
  margin-bottom: 72px;
  
  & > article {
    flex: 0 1 424px;
  }

  @media (max-width: 923px) {
    row-gap: 0;
    padding: 0;
    
    & > article:last-child {
      border-top: none;
    }
  }

  @media (max-width: 923px) {
    margin-bottom: 40px;
    justify-content: center;
  }
`