import { Link } from 'react-router-dom';
import * as S from './styles';

import {ReactComponent as Logo } from 'assets/logo.svg';

const Menu = () => {
  const routes = [
    {
      path:'/',
      label:'Home'
    },

    {
      path:'/carte',
      label:'Cardápio'
    },

    {
      path:'/about',
      label:'Sobre'
    }
  ];

  return(
    <S.Menu>
      <S.Content>
        <Logo />

        <S.MenuList>
          {routes.map( route => 
            <S.MenuLink key={route.label}>
              <Link to={route.path}> {route.label} </Link>
            </S.MenuLink>)}
        </S.MenuList>

      </S.Content>
    </S.Menu>
  );
};

export default Menu;