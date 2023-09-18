import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

const modifiers = {
  isActive: (theme:DefaultTheme) =>`
    background-color: ${theme.colors.blue};
    color: white;
  `
};

export const Filters = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

type FilterProps = {
  $isActive:boolean
}

export const Filter = styled.button<FilterProps>`
  align-items: center;
  background-color: $grey;
  border: none;
  border-radius: 4px;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 150px;

  &:hover{
    cursor: pointer;
  }

  ${({theme, $isActive})=> $isActive && modifiers.isActive(theme)};
`;