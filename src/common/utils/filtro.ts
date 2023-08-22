import { IItem } from "common/Interfaces/Itens"

export interface FiltragemProps{
  itens: IItem[]
  parametros: {
    busca:string
    categoria: number | null
    ordenador: string
  }
}


export const filtragem = ({itens, parametros}:FiltragemProps) => {

  const filtroBusca = (lista:IItem[], busca:string) =>{
    
    return lista.filter(item => item.title.toLowerCase().includes(busca))
  }

  const filtroOrdenador = (lista:IItem[], ordenador:string) =>{
    return lista.sort((a,b)=> {
      if(a[ordenador as keyof IItem] < b[ordenador as keyof IItem]){
        return -1
      }
      return 1
    })
  }

  const filtroCategoria = (lista: IItem[], categoria:number | null) =>{
    return lista.filter(item =>{
      return categoria? item.category.id === categoria : item
    })
  }


  
  const filtraPorCategoria =  filtroCategoria(itens, parametros.categoria)
  const filtraPorCategoriaEOrdenador = filtroOrdenador(filtraPorCategoria, parametros.ordenador)
  const filtraPorCategoriaOrdenadorEBusca =  filtroBusca(filtraPorCategoriaEOrdenador, parametros.busca)

  return filtraPorCategoriaOrdenadorEBusca

}

