import styled from 'styled-components';


export const GoBackButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({theme})=> theme.colors.red};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Wrapper =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
`;

