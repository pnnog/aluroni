import carte from 'pages/Carte/itens.json';

import { Title } from 'components/UI';
import nossaCasa from 'assets/home/nossa_casa.png';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { IItem } from 'types/Item';

const Home = () =>{
  const navigate = useNavigate();

  const getRandomItems = (carte: IItem[]):IItem[] =>{
    let carteCopy =  [...carte];
    carteCopy = carteCopy.sort(()=> 0.5 - Math.random());
    
    return carteCopy.slice(0,3);
  };

  const recommendedItems = getRandomItems(carte);

  const goToItem = (item:IItem):void =>{
    navigate(`/dish/${item.id}`);
  };
 
  return(
    <section>
      <Title>Recomendações da cozinha</Title>

      <S.RecommendedWrapper>
        <>
          {recommendedItems.map((item)=> 
            <S.Recommended key={item.id} onClick={()=> goToItem (item)}>

              <S.ImageBox>
                <img src={`/assets/pratos/${item.photo}`} alt={item.title} />
              </S.ImageBox>

              <S.Button>
                 Ver mais 
              </S.Button>

            </S.Recommended>)}
        </>
      </S.RecommendedWrapper>

      <Title>Nossa casa</Title>
      <S.OurHouseWrapper>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <S.OurHouseAddress>
            Rua vergueiro, 3185 <br/> <br/> Vila Mariana - SP
        </S.OurHouseAddress>
      </S.OurHouseWrapper>

    </section>

  );
};

export default Home;