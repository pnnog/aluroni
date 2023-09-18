import styled, { DefaultTheme } from 'styled-components';
import { BackgroundTypes } from './types';


const modifiers ={
  withBackground: (background: BackgroundTypes) => {
    const tagColors ={
      massas: '#d73b3b',
      carnes: '#30201e',
      combos: '#e6c864',
      veganos: '#80aa40'
    };


    return `
      border-radius: 2px;
      height: 40px;
      padding: 10px 30px;
      background-color: ${tagColors[background]};
      color: white;
      font-size: 1rem;
    `;
  },

  highlight:(theme:DefaultTheme)=> `
    color: ${theme.colors.red};
    font-size: 1.7rem;
  }
  `
};

type WrapperProps = {
  $background?: BackgroundTypes
  $highlight?:boolean
}


export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  font-size: 1.25rem;
  color: black;
  
  ${({$background})=> !!$background && modifiers.withBackground($background)}
  ${({theme, $highlight})=> !!$highlight && modifiers.highlight(theme) }
`;