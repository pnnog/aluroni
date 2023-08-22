import styles from './botao.module.scss'

interface BotaoProps {
  children: React.ReactElement | string
}

const Botao  = ({children}:BotaoProps) =>{
  return <button className={styles.botao}>{children}</button>
}

export default Botao