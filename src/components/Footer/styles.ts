'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Footer = styled.footer`
  max-width: 1160px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: end;
  justify-content: space-between;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const NavContainer = styled.ul`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);
  padding: 30px;
`

export const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);
`

export const SocialLink = styled(Link)`
  color: var(--color-gray);
  text-decoration: none;

  & > *:hover {
    color: var(--color-yellow);
  }
`
