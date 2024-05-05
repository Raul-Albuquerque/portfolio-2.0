'use client'
import styled from 'styled-components'

export const CardListContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 80px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
    justify-content: center;
  }
`

export const CardListContact = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 20px;
  text-align: center;

  @media (max-width: 640px) {
    justify-content: center;
    margin-bottom: 40px;
  }
`
