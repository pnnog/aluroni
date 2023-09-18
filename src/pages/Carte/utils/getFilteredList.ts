import { Filters } from 'pages/Carte/types';
import { IItem } from 'types/Item';

  
const searchTest = (search:string, itemTitle:string):boolean =>{
  const regex = new RegExp(search, 'i');
  return regex.test(itemTitle);
};

const categoryTest = (filterCategoryId:number, itemCategoryId:number):boolean | undefined =>{
  if(!filterCategoryId){
    return true;
  }
  return filterCategoryId === itemCategoryId;
};

export const getFilteredList = (list: IItem[], filters:Filters) => {
  const filteredList =  list.filter(item=> searchTest(filters.search, item.title) && categoryTest(filters.categoryId, item.category.id) );
  return filteredList;
};
