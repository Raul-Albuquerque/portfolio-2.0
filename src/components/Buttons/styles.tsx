import Link from 'next/link'
import styled from 'styled-components'

export const BtnPrimary = styled(Link)`
  font-size: 16px;
  text-align: center;
  padding: 14px 24px;
  color: var(--color-dark-blue);
  width: 44%;
  text-decoration: none;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))
      padding-box,
    linear-gradient(
        to right,
        var(--color-yellow),
        var(--color-pink),
        var(--color-purple)
      )
      border-box;
  border-radius: var(--border-radius);
  border: 2px solid transparent;

  &:hover {
    color: var(--color-modal-bg);
  }
`

export const BtnSecondary = styled(Link)`
  text-align: center;
  width: 44%;
  font-size: 16px;
  padding: 14px 24px;
  text-decoration: none;
  color: var(--color-gray);
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);

  &:hover {
    color: var(--color-dark-blue);
    background-color: var(--color-gray);
  }
`

export const BtnTertiary = styled(BtnPrimary)`
  font-size: 10px;
  padding: 8px 12px;
`
