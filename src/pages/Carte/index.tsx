import {useState } from 'react';

import CategoryFilter from './CategoryFilter';
import Itens from './Items';
import Sorter from './Sorter';

import SearchField from './SearchField';
import { SortOptions } from './Sorter/types';
import { Filters } from './types';
import * as S from './styles';
import { Title } from 'components/UI';


const Carte = () =>{
  const [filters, setFilters] = useState<Filters>({
    search:'',
    sortValue:'',
    categoryId: 0
  });

  const onSort = (sortValue: SortOptions):void =>{
    setFilters((state)=> ({...state, sortValue}));
  };

  const onSetCategory = (categoryId: number):void =>{
    if(categoryId === filters.categoryId) {
      setFilters((state)=> ({...state, categoryId:0}));
      return;
    }

    setFilters((state)=> ({...state, categoryId}));
  };

  const onSearch = (search:string) => {
    setFilters((state)=>({...state, search}));
  };

  return(
    <main>
      <S.Cardapio>
        <Title> Cardápio</Title>
        <SearchField search ={filters.search} onSearch = {onSearch}  />

        <S.Filtros >
          <CategoryFilter categoryId = {filters.categoryId} onSetCategory = {onSetCategory} />
          <Sorter sortValue ={filters.sortValue} onSort = {onSort}/>
        </S.Filtros>

        <Itens filters ={filters} />
      </S.Cardapio>
 
    </main>
  );
};


export default Carte;