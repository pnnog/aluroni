import styled from 'styled-components';

export const Buscador = styled.div`
  align-items: center;
  background-color: ${({theme})=> theme.colors.grey};
  border-radius: 5px;
  display: flex;
  gap: 18px;
  height: 42px;
  justify-content: space-between;
  padding: 0 15px;
  width: 400px;

  @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  background-color: ${({theme})=> theme.colors.grey};
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
  width: 100%;

  &::placeholder {
      color: #4c4d5e;
    }
`;