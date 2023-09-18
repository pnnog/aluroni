import { Container } from 'components/UI';
import styled from 'styled-components';

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  min-height: 103px ;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled.li`
  list-style-type: none;
  padding: 0 20px;

    a {
      color: ${({theme})=> theme.colors.dark};
      cursor: pointer;
      font-size: 24px;
      font-weight: 600;
      text-decoration: none;
      transition: .2s ease;
      &:hover {
        color: ${({theme})=> theme.colors['dark-grey']};
      }
    }

`;

export const Content = styled(Container).attrs({as: 'div'})`
  display: flex;
  padding-top: 0px;
  padding-bottom: 0px;

  svg{
    display: none;
  }

  @media (min-width: 744px){
    svg{
      display: block;
    }
  }
`;