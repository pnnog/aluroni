import Tag from 'pages/Carte/Tag';
import { BackgroundTypes } from 'pages/Carte/Tag/types';
import { ItemProps } from './types';

import * as S from './styles';
import { IItem } from 'types/Item';
import { useNavigate } from 'react-router-dom';

const Item = ({item, expanded=false}:ItemProps) => {
  const navigate = useNavigate();


  const goToItem = (item:IItem):void =>{
    if(!expanded)navigate(`/dish/${item.id}`);
  };


  return(

    <S.Item $expanded ={expanded} onClick={() => goToItem(item) }>
      <S.BoxImage >
        <img src={`/assets/pratos/${item.photo}`} alt={item.title} />
      </S.BoxImage>

      <S.Description>
        <S.TitleWrapper>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </S.TitleWrapper>

        <S.Tags >
          <Tag background={item.category.label.toLowerCase() as BackgroundTypes}> {item.category.label} </Tag>
          <Tag> {item.size} g </Tag>
          <Tag> Serve {item.serving} pessoa{item.serving > 1 && 's'} </Tag>
          <Tag highlight> R$ {item.price.toFixed(2)} </Tag>
        </S.Tags>

      </S.Description>
    </S.Item>

  );
};

export default Item;