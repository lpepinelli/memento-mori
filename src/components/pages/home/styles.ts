import styled from 'styled-components'

export const DarkContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary.dark};
  padding: 16px;
  position: relative;
  border-radius: 8px;

  a {
    position: absolute;
    right: 8px;
    top: 5px;
    color: ${({ theme }) => theme.colors.primary.light};
    opacity: 0;
    /* border: 1px solid red; */
    transition: color 0.5s ease-in, opacity 0.2s ease-in;
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`
