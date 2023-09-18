import {CgSearch} from 'react-icons/cg';

import { SearchFieldProps } from './types';

import * as S from './styles';

const SearchField = ({search, onSearch}:SearchFieldProps) =>{
  return(
    <S.Buscador >
      <S.Input 
        value={search}
        onChange={e => onSearch(e.target.value)}
        id="buscador" 
        name="buscador" 
        type="text" 
        placeholder="Buscar" 
        required 
      />
      <CgSearch size={14} color='#4C4D5E'/>
    </S.Buscador>
  );
};

export default SearchField;