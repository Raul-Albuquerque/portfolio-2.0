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
              <CustomLink url="/pages/about" linkType="nav">
                ABOUT
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/pages/projects" linkType="nav">
                PROJECTS
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/pages/freelances" linkType="nav">
                FREELANCES
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/pages/contacts" linkType="nav">
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
              <CustomLink url="/pages/about" linkType="nav">
                SOBRE MIM
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/pages/projects" linkType="nav">
                PROJETOS
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/pages/freelances" linkType="nav">
                FREELANCES
              </CustomLink>
            </li>
            <li>
              <CustomLink url="/pages/contacts" linkType="nav">
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
