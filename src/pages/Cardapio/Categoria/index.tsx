import classNames from 'classnames'
import { SetStateAction, memo } from 'react'

import categoriasJson from './categorias.json'

import styles from './Filtros.module.scss'

interface CategoriaProps {
  categoria: number | null
  setCategoria: React.Dispatch<SetStateAction<number | null>>
}

const Categoria = ({categoria, setCategoria }:CategoriaProps) =>{

  const alteraCategoria = (id:number) =>{
    if(id === categoria) return setCategoria(null)
    return setCategoria(id)
  }

  return(
    <div className={styles.filtros}>

      {categoriasJson.map((item)=> (
        <button
          className={classNames({
            [styles.filtros__filtro]:true,
            [styles['filtros__filtro--ativo']]:categoria === item.id 
          })} 
          onClick={()=> alteraCategoria(item.id)} 
          key={item.id}>  {item.label}
        </button>
      ))}
    </div>
  )
}

export default memo(Categoria)