import styled from 'styled-components'

interface Props {
  pokemonType: string
}

export const CardContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  min-height: 280px;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.palette.warning.light};
  }

  .pokeindex {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  }
`

export const CardHeader = styled.div`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.grey[300]
      : theme.palette.grey[50]};
  border-radius: 8px 8px 0 0;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardBody = styled.div<Props>`
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, pokemonType }) =>
    pokemonType === 'fire'
      ? theme.palette.error.light
      : theme.palette.warning.main};
`
export const CardFooter = styled.div`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.grey[300]
      : theme.palette.grey[50]};
  padding: 5px;
  margin-top: auto;
  border-radius: 0 0 8px 8px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PokeTypeList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 3px;
  flex-wrap: wrap;
`

export const PokeTypeItem = styled.li<Props>`
  width: 90px;
  height: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  background-color: ${({ theme, pokemonType }) =>
    pokemonType === 'fire'
      ? theme.palette.error.light
      : theme.palette.warning.main};
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
`
