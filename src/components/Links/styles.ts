'use client'

import Link from 'next/link'
import styled from 'styled-components'

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

  &:hover {
    color: var(--color-gray);
  }
`

export const NavItem = styled(Link)`
  font-size: 16px;
  color: var(--color-gray);
  text-decoration: none;

  &:hover {
    background-image: -webkit-linear-gradient(
      left,
      var(--color-yellow),
      var(--color-pink),
      var(--color-purple)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`
