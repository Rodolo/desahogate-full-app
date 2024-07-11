import { PublicacionProps } from "../interfaces/interfaces"

export const Carta =  ({ destinatario, mensaje, fecha_creacion } : PublicacionProps) => {

  return (
    <div className='carta' title={`Publicado el ${fecha_creacion}`}>
      <span> Querid@ {destinatario}: </span> 
      <p> {mensaje} </p>
    </div>
  )
}
