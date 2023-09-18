import { Container } from 'components/UI';
import styled from 'styled-components';

export const Wrapper =  styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    svg{
      max-width: 100%;
    }
`;



export const GoBack = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    color: ${({theme})=> theme.colors.red};
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
  }

  
`;


