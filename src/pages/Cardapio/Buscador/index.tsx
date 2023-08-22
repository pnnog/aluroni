import styles from './Buscador.module.scss'
import {CgSearch} from 'react-icons/cg'

interface BuscadorProps {
  busca:string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}



const Buscador = ( {busca, setBusca}:BuscadorProps) =>{
  return(
    <div className={styles.buscador}>
        <input 
          value={busca}
          onChange={e => setBusca(e.target.value)}
          id="buscador" 
          name="buscador" 
          type="text" 
          placeholder="Buscar" 
          required 
        />

        <CgSearch size={14} color='#4C4D5E'/>
    </div>

    
  )
}

export default Buscador