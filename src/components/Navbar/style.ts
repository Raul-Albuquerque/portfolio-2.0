'use client'

import styled from 'styled-components'

export const NavBar = styled.nav`
  max-width: 1160px;
  width: 100%;
  position: fixed;
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
