import styled from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

const modifiers ={
  isActive: (theme:DefaultTheme)=>`
    background-color: ${theme.colors.blue};
    
    p{
      color: ${theme.colors.grey};
    }

    svg{
      color: ${theme.colors['light-grey']};
    }
  }
  
  `,

  isVisible: () => `
    display:flex;
  `
};

export const Select = styled.button`
  min-height: 40px;
  width: 150px;
  border-radius: 4px;
  background-color: $grey;
  overflow: hidden;
  border: 0;


  @media (max-width: $mobile) {
    width: 100%;
  }
`;

type SelectHeaderProps = {
  $isActive:boolean
}

export const SelectHeader = styled.div<SelectHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 15px;
  min-height: 40px;
  gap: 14px;
  width: 100%;
  background-color: $grey;
  cursor: pointer;
  
  svg{
    color:${({theme})=> theme.colors.black};
  }

  p {
    font-weight: 600;
    color: #4c4d5e;
    font-size: 1rem;
    font-weight: bold;
    text-align: start;
  }

  ${({theme, $isActive})=> $isActive && modifiers.isActive(theme)};
`;

type SelectOptionsProps = {
  $isVisible:boolean
}

export const SelectOptions = styled.ul<SelectOptionsProps>`
  background-color: transparent;
  list-style:none;
  flex-direction: column;
  border-top: 1px solid ${({theme})=> theme.colors['light-grey']};
  display: none;


  li{
    cursor: pointer;
    min-height:40px;
    padding: 10px 15px ;
    width: 100%;
    text-align: start;
    pointer-events: all;
    transition: all 50ms ease-in-out ;
    border-bottom: 1px solid ${({theme})=> theme.colors['light-grey']};
    color: #4c4d5e;
    font-weight: bold;
    font-size: 1rem;

    &:hover{
      background-color: ${({theme})=> theme.colors.blue};
      color: ${({theme})=> theme.colors['light-grey']};
    }
  }

  ${({$isVisible})=> $isVisible && modifiers.isVisible()};




`;




//     
// }








