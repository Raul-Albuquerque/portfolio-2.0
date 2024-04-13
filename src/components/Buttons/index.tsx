import * as S from './styles'

export type Props = {
  type: 'primary' | 'secondary'
  children: string
  url: string
}

export const Button = ({ url, type, children }: Props) => {
  return (
    <>
      {type === 'primary' ? (
        <S.BtnPrimary href={url}>{children}</S.BtnPrimary>
      ) : (
        <S.BtnSecondary href={url}>{children}</S.BtnSecondary>
      )}
    </>
  )
}
