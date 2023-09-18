
import {  useNavigate, useParams } from 'react-router-dom';
import data from 'data/carte.json';

import Item from 'components/Item';

import * as S from './styles';
import { Container } from 'components/UI';
import NotFound from 'pages/NotFound';
import Layout from 'components/Layout';

const Dish = () =>{
  const navigate  = useNavigate();
  const {id} = useParams();

  const item = data.find(item=> item.id === Number(id));

  if(!item){
    console.log(Error(`O item com id ${id} não foi encontrado`));
    return <NotFound/>;
  }

  return(
    <Layout>

      <Container>
        <S.Wrapper>
          <S.GoBackButton onClick={()=> navigate(-1)}> Voltar </S.GoBackButton>
          <Item  
            key={item.id}
            item={item}
            expanded
          />
        </S.Wrapper>
      </Container>
    </Layout>

  );
};

export default Dish;