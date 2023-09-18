export type SortOptions = '' | 'size' | 'serving' | 'price' 


export type SorterProps = {
  sortValue: SortOptions
  onSort: (sortValue:SortOptions)=> void

}