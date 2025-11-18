"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  BsWhatsapp,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from "react-icons/bs";
import { CustomLink } from "../Links";
import { Dev } from "@/models/developer";
import * as S from "./styles";

export const Footer = () => {
  const footer = useTranslations("Footer");
  const localActive = useLocale();

  return (
    <S.Footer>
      <nav>
        <S.NavContainer>
          <li>
            <CustomLink url="/" linkType="nav">
              {footer("home")}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/about`} linkType="nav">
              {footer("about")}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/projects`} linkType="nav">
              {footer("projects")}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/contacts`} linkType="nav">
              {footer("contacts")}
            </CustomLink>
          </li>
        </S.NavContainer>
      </nav>

      <S.SocialContainer>
        <li>
          <S.SocialLink target="_blank" href={Dev.whatsapp_url}>
            <BsWhatsapp size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink target="_blank" href={Dev.linkedin_url}>
            <BsLinkedin size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink target="_blank" href={Dev.email_url}>
            <BsEnvelopeFill size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink target="_blank" href={Dev.github_url}>
            <BsGithub size={24} />
          </S.SocialLink>
        </li>
      </S.SocialContainer>
    </S.Footer>
  );
};
