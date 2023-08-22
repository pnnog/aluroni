import { IItem } from "common/Interfaces/Itens"

interface ItensProps{
  itensFiltrados: IItem[]
}

const Itens = ({itensFiltrados}:ItensProps) =>{
  return(
    <div>
     {itensFiltrados.map(item =>(

      <div key={item.id}>
        <h1> {item.title}</h1>
      </div>
     ))}

    </div>
  )
}

export default Itens