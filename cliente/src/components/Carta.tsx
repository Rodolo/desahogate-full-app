import { DestinatarioMensajeProps } from "../interfaces/interfaces"

export const Carta =  ({ destinatario, mensaje } : DestinatarioMensajeProps) => {
  return (
    <div className='carta'>
      <span> Querid@ {destinatario}: </span>
      <p> {mensaje} </p>
    </div>
  )
}
