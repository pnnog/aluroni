import Header from 'components/Header';
import { Container } from 'components/UI';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type LayoutTypes = {
  children?: ReactNode
}

const Layout = ({children}:LayoutTypes) =>{
  return(
    <>
      <Header/>
      
      <Container>
        <Outlet />
        {children}
      </Container>
    </>
  );
};

export default Layout;