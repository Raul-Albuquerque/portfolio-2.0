import Image from 'next/image'
import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1160px;
  width: 100%;
  height: 70dvh;
  margin: 0 auto;

  @media (min-height: 960px) {
    height: 76dvh;
  }
`

export const HomeSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WelcomeContainer = styled.article`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageContainer = styled.article`
  width: 48%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Name = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: var(--color-gray);
  text-transform: uppercase;
`

export const StackContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const Stack = styled.h2`
  font-size: 64px;
  letter-spacing: 2px;
  height: 100%;
  text-align: center;
  background-image: -webkit-linear-gradient(
    left,
    var(--color-yellow),
    var(--color-pink),
    var(--color-purple)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 60px;
`

export const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileImage = styled(Image)`
  margin: 0 auto;
`

export const PageTitle = styled.h2`
  font-size: 64px;
  font-weight: 400;
  color: var(--color-light-gray);
  margin-bottom: 20px;
`
