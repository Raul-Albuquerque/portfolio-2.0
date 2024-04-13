import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { CustomLink } from '../Links'
import * as S from './styles'

type Props = {
  isEn: boolean
}

export const Footer = (props: Props) => {
  return (
    <S.Footer>
      <nav>
        {props.isEn ? (
          <S.NavContainer>
            <li>
              <CustomLink url="/" linkType="nav">
                HOME
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/" linkType="nav">
                ABOUT
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/" linkType="nav">
                PROJECTS
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/" linkType="nav">
                EXPERIENCE
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/" linkType="nav">
                CONTACT
              </CustomLink>
            </li>
          </S.NavContainer>
        ) : (
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
        )}
      </nav>

      <S.SocialContainer>
        <li>
          <S.SocialLink href="/">
            <FaWhatsapp size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaLinkedin size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaEnvelope size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaGithub size={24} />
          </S.SocialLink>
        </li>
      </S.SocialContainer>
    </S.Footer>
  )
}
