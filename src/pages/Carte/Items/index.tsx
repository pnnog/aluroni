import { useEffect, useState } from 'react';


import carte from 'data/carte.json';
import { getFilteredList } from 'pages/Carte/utils/getFilteredList';
import { getSortedList } from 'pages/Carte/utils/getSortedList';

import {ItemsProps } from './types';
import * as S from './styles';
import { IItem } from 'types/Item';
import Item from 'components/Item';


const Itens = ({filters}:ItemsProps) =>{
  const [filteredList, setFilteredList] = useState<IItem[]>(carte);

  useEffect( ()=>{
    const filtered =  getFilteredList(carte, filters);
    const sorted = getSortedList(filtered, filters.sortValue);
    setFilteredList(sorted);
  },[filters]);


  return(
    <S.Items>
      {filteredList.map(item =>(
        <Item
          key={item.id}
          item={item}
        />
      ))}

    </S.Items>
  );
};

export default Itens;