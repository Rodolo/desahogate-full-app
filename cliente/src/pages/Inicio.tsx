import { Carta } from '../components/Carta'
import { usePublicaciones } from '../hooks/usePublicaciones'
import { Paginacion } from '../components/Paginacion';
import { useEffect } from 'react';

export const Inicio = () => {

  const { paginaActual, publicaciones, getPublicacionesDB, getTotalElementosDB, setPaginaInicio } = usePublicaciones();

  useEffect(() => {
    setPaginaInicio();
  }, [])

  useEffect(() => {
     getTotalElementosDB();
  }, []);
  
  
  useEffect(() => {
      getPublicacionesDB();
  }, [paginaActual]);



  return (
    <>
      <h3 className='text-align-center'> Ultimas publicaciones: </h3>
        <div className='carta-container'>
          
          { 
            publicaciones.length === 0 && <h4>Cargando...</h4>
          }
          {
            publicaciones.map(row => <Carta key={row.id_publicacion} destinatario={row.destinatario} mensaje={row.mensaje} fecha_creacion={row.fecha_creacion}/>)
          }

        </div>

        <Paginacion/>
    
    </>
  )
}
