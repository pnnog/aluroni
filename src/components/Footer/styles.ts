import { Container } from 'components/UI';
import styled from 'styled-components';

export const Wrapper =  styled.footer`
  background-color: ${({theme})=> theme.colors.red};
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled(Container).attrs({as: 'div'})`
  padding-top: 20px;
  padding-bottom: 20px;
`;



