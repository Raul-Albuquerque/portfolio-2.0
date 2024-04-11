import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { CustomLink } from '../Links'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      <nav>
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
      </nav>

      <S.SocialContainer>
        <li>
          <S.SocialLink href="/">
            <FaWhatsapp size={20} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaLinkedin size={20} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaEnvelope size={20} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaGithub size={20} />
          </S.SocialLink>
        </li>
      </S.SocialContainer>
    </S.Footer>
  )
}
