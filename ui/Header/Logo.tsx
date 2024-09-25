import {LogoIcon} from '@/public/svgComponets/LogoIcon';
import styled from 'styled-components';

const textIcon = 'VPN'

export const Logo = () => {
    return (
        <Logotip href={'#mainAnchor'}>
            <LogoIcon/><span>{textIcon}</span>
        </Logotip>
    )
}

const Logotip = styled.a`;
  display: flex;
  column-gap: 4px;
  align-items: center;
  font-weight: 600;
  line-height: 150%; 
  width: max-content;
`
