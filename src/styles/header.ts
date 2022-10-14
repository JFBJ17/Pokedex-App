import styled from 'styled-components'

export const HeaderMain = styled.header`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.grey[300]
      : theme.palette.grey[50]};
  text-align: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.palette.mode === 'dark'
        ? theme.palette.warning.light
        : theme.palette.grey[700]};
`
