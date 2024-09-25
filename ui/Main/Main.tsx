'use client'
import {MainSection} from '@/ui/Main/Sections/MainSection';
import styled from '@emotion/styled'
import {AboutSection} from '@/ui/Main/Sections/AboutSection';
import {SelectSection} from '@/ui/Main/Sections/SelectSection';

export const Main = () => {
    return (
        <Wrapper id={'mainAnchor'}>
            <MainSection/>
            <AboutSection/>
            <SelectSection/>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  max-width: 924px;
  margin: 0 auto;
  padding: 150px 16px 0 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 428px) {
    padding-top: 90px;
  }
`