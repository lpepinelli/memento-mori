import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    /* margin-top: 0px; */
    gap: 30px;
  }
`
