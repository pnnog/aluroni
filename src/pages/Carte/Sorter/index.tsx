
import {AiOutlineDown as ArrowDownIcon,  AiOutlineUp as ArrowUpIcon} from 'react-icons/ai';
import { memo, useState } from 'react';

import sortJson from './sort.json';
import { SortOptions, SorterProps } from './types';
import * as S from './styles';




const Sorter = ({sortValue, onSort}:SorterProps) =>{
 
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const getSortName = (sortValue:SortOptions, array: typeof sortJson):string|undefined =>{
    const sortObj = array.find(item => item.value === sortValue);
    return sortObj?.nome;
  };

  const sortName = getSortName(sortValue, sortJson);
  return(

    <S.Select onBlur={()=> setShowOptions(false)} onClick={()=> setShowOptions(state => !state)} >
      <S.SelectHeader $isActive = {!!sortName}>
        <p> {sortName || 'Ordenando por'} </p>
        {showOptions? (<ArrowUpIcon size={14} />): (<ArrowDownIcon size={14} />)}
      </S.SelectHeader>
  
      <S.SelectOptions $isVisible={showOptions}>
        {sortJson.map(option => <li aria-selected role='option' key={option.value} onClick={()=> onSort(option.value as SortOptions)}> {option.nome} </li>)}
      </S.SelectOptions>

    </S.Select>   
  );
};

export default memo(Sorter);