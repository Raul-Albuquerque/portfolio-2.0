import * as S from './styles'

export type Props = {
  type: 'primary' | 'secondary' | 'tertiary'
  children: string
  url: string
}

export const Button = ({ url, type, children }: Props) => {
  return (
    <>
      {type === 'primary' ? (
        <S.BtnPrimary href={url}>{children}</S.BtnPrimary>
      ) : (
        <>
          {type === 'secondary' ? (
            <S.BtnSecondary href={url} target="_blank">
              {children}
            </S.BtnSecondary>
          ) : (
            <S.BtnTertiary href={url} target="_blank">
              {children}
            </S.BtnTertiary>
          )}
        </>
      )}
    </>
  )
}
