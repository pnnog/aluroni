import {useEffect, useMemo, useState } from 'react'
import Buscador from './Buscador'
import styles from './Cardapio.module.scss'
import {ReactComponent as Logo } from 'assets/logo.svg'

import Categoria from './Categoria'
import Ordenador from './Odernador'
import itensData from './itens.json'
import Itens from './Itens'
import { IItem } from 'common/Interfaces/Itens'
import { filtragem } from 'common/utils/filtro'

const Cardapio = () =>{
  const [busca, setBusca] = useState('')
  const [ordenador, setOrdenador] = useState<string >('')
  const [categoria, setCategoria] = useState<number | null>(null)
  const [itens] = useState<IItem[]>(itensData)
  const [itensFiltrados, setItensFiltrados] = useState<IItem[]>(itens)


  const dadosParaFiltragem = useMemo(()=> ({
    itens,
    parametros:{
      busca,
      categoria,
      ordenador
    }

  }),[itens, busca, categoria, ordenador])


  useEffect( ()=>{
    const listaFiltrada = filtragem(dadosParaFiltragem)
    setItensFiltrados(listaFiltrada)

  },[dadosParaFiltragem])


  return(
      <main>
        <nav className={styles.menu}>
          <Logo />
        </nav>

        <header className={styles.header}>
          <div className={styles.header__text}>
            A casa do código e da massa
          </div>
        </header>


        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}> Cardápio </h3>
          <Buscador busca ={busca} setBusca={setBusca}  />
         <div className={styles.cardapio__filtros}>
            <Categoria categoria = {categoria} setCategoria={setCategoria} />
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
         </div>

         <Itens itensFiltrados={itensFiltrados} />

          
        </section>
        
      </main>
  )
}


export default Cardapio