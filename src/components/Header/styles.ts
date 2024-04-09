'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Header = styled.header`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  font-size: 32px;
  background-image: -webkit-linear-gradient(
    left,
    var(--color-yellow),
    var(--color-pink),
    var(--color-purple)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ThemeSwitcher = styled.img`
  max-width: 30px;
  width: 100%;
  max-height: 30px;
  height: 100%;
  cursor: pointer;
`
