import * as S from './styles'

export type Props = {
  linkType: 'logo' | 'nav'
  url: string
  children: string
}

export const CustomLink = ({ linkType, url, children }: Props) => {
  return (
    <>
      {linkType === 'logo' ? (
        <S.Logo href={url}>{children}</S.Logo>
      ) : (
        <S.NavItem href={url}>{children}</S.NavItem>
      )}
    </>
  )
}
