'use client'

import styled from 'styled-components'

export const Header = styled.header`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1160px) {
    width: 90%;
  }
`

export const SwitchersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

export const Switcher = styled.img`
  max-width: 30px;
  width: 100%;
  max-height: 30px;
  height: 100%;
  margin-left: 20px;
  cursor: pointer;
`
