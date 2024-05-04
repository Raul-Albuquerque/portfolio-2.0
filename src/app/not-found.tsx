'use client'

import styled from 'styled-components'

export default function NotFound() {
  return (
    <html>
      <body>
        <Title>Something went wrong!</Title>
      </body>
    </html>
  )
}

export const Title = styled.h1`
  text-align: center;
  text-align: center;
  color: var(--color-gray);
  padding-top: 20px;
`
