
import classNames from 'classnames'
import {AiOutlineDown as ArrowDownIcon,  AiOutlineUp as ArrowUpIcon} from 'react-icons/ai'
import { SetStateAction, memo, useState } from 'react'

import options from './options.json'

import styles from './ordernador.module.scss'


 interface OrdernadorProps {
  ordenador:string
  setOrdenador: React.Dispatch<SetStateAction<string>>
 }


const Ordenador = ({ordenador, setOrdenador}:OrdernadorProps) =>{
 
  const [showOptions, setShowOptions] = useState<boolean>(false)


  const findOptionName = (optionValue:string):string =>{
    const optionObj =  options.find(option=> option.value === optionValue)
    return optionObj?.nome || ''
  }

  const optionName  = findOptionName(ordenador)

  return(

      <button className={styles.select} onBlur={()=> setShowOptions(false)} onClick={()=> setShowOptions(state => !state)} >
        <div className={classNames({
          [styles.select__header]:true,
          [styles['select__header--ativo']]:optionName
        })}>
          <p> { optionName || 'Ordenando por'} </p>    
          {showOptions? (<ArrowUpIcon size={14} />): (<ArrowDownIcon size={14} />)}
        </div>
        
        <ul 
          className={classNames({
            [styles.select__options]:true,
            [styles['select__options--visible']]:showOptions
            })}
        >

          {options.map(option => (
            <li aria-selected role='option' key={option.value} className={styles.options__option} onClick={()=> setOrdenador(option.value)}> {option.nome} </li>
          ))}        
        </ul>     
      </button>   
  )
}

export default memo(Ordenador)