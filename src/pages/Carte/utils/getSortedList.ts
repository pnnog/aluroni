import { SortOptions } from 'pages/Carte/Sorter/types';
import { IItem } from 'types/Item';

function sortList (a:IItem, b:IItem, param: SortOptions, flow: 'ascending' | 'descending' = 'ascending'){
  
  if(flow === 'descending'){
    return a[param as keyof IItem] > b[param as keyof IItem]? -1 : 1;
  }

  return a[param as keyof IItem] < b[param as keyof IItem]? -1 : 1;

}


export const getSortedList = (list:IItem[], sorter:SortOptions):IItem[] =>{

  switch(sorter){
  case 'price':
    list.sort((a,b)=> sortList(a, b, sorter, 'ascending'));
    return list;
    

  case 'serving':
    list.sort((a,b)=> sortList(a, b, sorter, 'descending'));
    return list;
    

  case 'size':
    list.sort((a,b)=> sortList(a, b,sorter, 'descending'));
    return list;

  default:
    return list;
  } 

};