import { ChangeEvent, FormEvent, useEffect } from "react";
import { Carta } from "../components/Carta";
import { useForm } from "../hooks/useForm";
import { usePublicaciones } from "../hooks/usePublicaciones";
import { initialFormState } from "../utils/utils";
import { Paginacion } from "../components/Paginacion";


export const Cotillea = () => {

  const { paginaActual, publicaciones, getPublicacionByDestinatarioDB, getTotalElementosByDestinatarioDB, setPaginaInicio } = usePublicaciones();
  const { destinatario, formEnviado, setFormEnviado, handleOnChange, handleOnSubmit } = useForm(initialFormState);

  const customHandleOnSubmit = async(e:FormEvent<HTMLFormElement>) => {
    handleOnSubmit(e);
    if( destinatario !== ''){
        await getTotalElementosByDestinatarioDB({destinatario});
        await getPublicacionByDestinatarioDB({destinatario});  
    }
   }

   const customHandleOnChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      handleOnChange(e);
      setFormEnviado(false);
   }

  useEffect(() => {
    setPaginaInicio();
  }, [])
  
     
  useEffect(() => {
    if( formEnviado )
      getPublicacionByDestinatarioDB({destinatario});  
  }, [paginaActual]);


  return (
  <div>
        <div>
          <form className="form-busqueda form" onSubmit={customHandleOnSubmit} noValidate>
            <div className="flex-column">
              <label htmlFor="destinatario"> Quiero salseo sobre...</label>
              <input className="form-control busqueda" type="text" name="destinatario" value={destinatario} onChange={customHandleOnChange}/>
              {(formEnviado && destinatario.length == 0) && <span className="error"> El campo es obligatoriooo </span>}
              <div className="btn-container">
                  <button type="submit"> Veamos </button>
              </div>
            </div>
          </form>
       
        </div>
        { 
           (formEnviado && destinatario) &&                        
                <> 
                  {
                    publicaciones.length == 0 && 
                    <div className='carta-container'> <h3> Nadie ha rajado sobre esta persona... :(</h3> </div>
                  }
                  {
                    publicaciones.map(row => row.destinatario.toUpperCase() === destinatario.toUpperCase() && 
                     <div className='carta-container' key={row.id_publicacion}> 
                        <Carta key={row.id_publicacion} destinatario={row.destinatario} mensaje={row.mensaje}/>
                     </div>)
                  }        
                    <Paginacion/>                    
                </>
        }
  </div>

  )
}
