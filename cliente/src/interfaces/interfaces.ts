
export interface DataProps {
    id_publicacion: number,
    destinatario: string
    mensaje: string
}


export interface DestinatarioProps {
  destinatario: string
}

export interface MensajeProps {
  mensaje: string
}

export interface DestinatarioMensajeProps extends DestinatarioProps, MensajeProps {}