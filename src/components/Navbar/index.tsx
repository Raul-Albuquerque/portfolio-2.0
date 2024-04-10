import { CustomLink } from '../Links'
import * as S from './style'

export const Navbar = () => {
  return (
    <S.NavBar>
      <S.NavContainer>
        <li>
          <CustomLink url="/" linkType="nav">
            INÍCIO
          </CustomLink>
        </li>
        <li>
          <CustomLink url="/" linkType="nav">
            SOBRE MIM
          </CustomLink>
        </li>
        <li>
          <CustomLink url="/" linkType="nav">
            PROJETOS
          </CustomLink>
        </li>
        <li>
          <CustomLink url="/" linkType="nav">
            EXPERIÊNCIA
          </CustomLink>
        </li>
        <li>
          <CustomLink url="/" linkType="nav">
            CONTATO
          </CustomLink>
        </li>
      </S.NavContainer>
    </S.NavBar>
  )
}
