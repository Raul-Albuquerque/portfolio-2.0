import Link from 'next/link'
import styled from 'styled-components'

import { inter } from '../../assets/fonts/index'

export const CardContainer = styled.article`
  max-width: 260px;
  max-height: 320px;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);
  color: var(--color-gray);
`

export const ProjectTitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const ProjectDescription = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-family: inter, sans-serif;
  line-height: 18px;
  margin: 16px 0;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  svg {
    cursor: pointer;

    &:hover {
      color: var(--color-yellow);
    }
  }
`

export const IconsContainer = styled.div`
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ActionIcon = styled(Link)`
  text-decoration: none;
  color: var(--color-gray);

  &:hover {
    color: var(--color-yellow);
  }
`

export const CardContainerContact = styled(Link)`
  max-width: 180px;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);
  color: var(--color-gray);
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      90deg,
      var(--color-yellow),
      var(--color-pink),
      var(--color-purple)
    );
    opacity: 0.7;
    color: var(--color-white);
  }
`

export const ContactTitle = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 12px;
`
