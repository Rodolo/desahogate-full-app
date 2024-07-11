
export interface DataProps {
    id_publicacion: number,
    destinatario: string
    mensaje: string,
    fecha_creacion: string
}


export interface DestinatarioProps {
  destinatario?: string
}

export interface MensajeProps {
  mensaje?: string
}

export interface FechaProps {
  fecha_creacion?: string
}



export interface PublicacionProps extends DestinatarioProps, MensajeProps, FechaProps {}