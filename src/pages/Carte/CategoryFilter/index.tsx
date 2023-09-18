import { memo } from 'react';

import jsonCategory from './categorias.json';

import { CategoryFilterProps } from './types';
import * as S from './styles';

const CategoryFilter = ({categoryId, onSetCategory }:CategoryFilterProps) =>{

  return(
    <S.Filters>
      {jsonCategory.map((item)=> (
        <S.Filter 
          key={item.id} 
          $isActive = {item.id === categoryId} 
          onClick={()=> onSetCategory(item.id)}>

          {item.label}

        </S.Filter>
      ))}
    </S.Filters>
  );
};

export default memo(CategoryFilter);

