import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Carte from 'pages/Carte';
import Menu from 'components/Menu';
import Layout from 'components/Layout';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Footer from 'components/Footer';
import Dish from 'pages/Dish';

const AppRouter = () =>{
  return(
    <main>
      <Router>
        <Menu />
  
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='carte' element={<Carte />} />
            <Route path='about' element={<About />} />
          </Route>

          <Route path ='dish/:id' element={<Dish />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

        <Footer/>

      </Router>
    </main>

  );
};

export default AppRouter;