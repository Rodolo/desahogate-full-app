import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { usePublicaciones } from "../hooks/usePublicaciones";
import { FormEvent } from "react";
import { initialFormState } from "../utils/utils";

export const Desahogate = () => {

  const { mensaje, destinatario, formEnviado, handleOnChange, handleOnSubmit } = useForm(initialFormState);
  const { guardarPublicacionDB } = usePublicaciones();
  const navigate = useNavigate();

  const customHandleOnSubmit = async(e:FormEvent<HTMLFormElement>) => {
        handleOnSubmit(e);
        if( destinatario !== '' && mensaje != '' ){
            await guardarPublicacionDB({destinatario, mensaje});
            navigate('/');
        }
  }

  return (
    <div className="form-container">
      <form className="form-publicaciones" onSubmit={customHandleOnSubmit} noValidate>
          <div className="flex-column">
              <label>Para:</label>
              <input className="form-control destinatario" onChange={handleOnChange} type="text" name="destinatario" value={destinatario}/>
              {(formEnviado && destinatario.length == 0) && <span className="error"> El campo es obligatoriooo </span>}
          </div>
          <div className="flex-column">
              <label>Que quieres decirle?</label>
              <textarea  maxLength={255} className="form-control mensaje" onChange={handleOnChange} name="mensaje" value={mensaje}/>
              {(formEnviado && mensaje.length == 0) && <span className="error"> El campo es obligatoriooo </span>}
          </div>
          <div className="btn-container">
            <button type="submit">Un Besito</button>
          </div>        
      </form>
    </div>

   
  )
}
