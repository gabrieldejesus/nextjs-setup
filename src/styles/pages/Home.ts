import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 30px;
    margin-top: 30px;
    color: ${props => props.theme.colors.primary};
  }
`
