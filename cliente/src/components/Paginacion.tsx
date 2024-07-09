import { usePublicaciones } from "../hooks/usePublicaciones";
import { elementosPorPagina } from "../utils/utils";
import { setPaginaActualDecrease, setPaginaActualIncrease, setPaginaActualInicio, setPaginaActualUltima } from "../slice/publicacionesSlice";
import { useDispatch } from "react-redux";




export const Paginacion = () => {

  const { paginaActual, totalPublicaciones } = usePublicaciones();
  const dispatch = useDispatch();
  const totalPaginas = totalPublicaciones > elementosPorPagina ? totalPublicaciones / elementosPorPagina : 1;
  const totalPaginasRound = Math.round( totalPaginas ) ;
  const ultimaPaginaRound = totalPaginasRound >= totalPaginas ? totalPaginasRound : totalPaginasRound + 1 ;

  const handleOnPrimeraPagina = () => {
    dispatch(setPaginaActualInicio());
  }

  
  const handleOnDecreasePagina = () => {
    dispatch(setPaginaActualDecrease());
  }

  const handleOnIncreasePagina = () => {
    dispatch(setPaginaActualIncrease());
  }


  const handleOnUltimaPagina = () => {
    dispatch(setPaginaActualUltima(ultimaPaginaRound));
  }




  return (
    <div className="paginacion">
       <div className="paginacion-d-flex">
         <button className={`paginacion-boton ${paginaActual <= 1 ? 'desactivado' : 'activado'}`} onClick={handleOnPrimeraPagina} disabled={ paginaActual <= 1 }> Principio </button>
         <button className={`paginacion-boton ${paginaActual <= 1 ? 'desactivado' : 'activado'}`} onClick={handleOnDecreasePagina} disabled={ paginaActual <= 1 }> Anterior </button>
       </div>
   

        <div className="numero-pagina-container">
          <span className="paginacion-actual">  { paginaActual } </span >
          de
          <span className="paginacion-total"> { ultimaPaginaRound } </span> 
        </div>
       

      <div className="paginacion-d-flex">
        <button className={`paginacion-boton ${paginaActual >= ultimaPaginaRound ? 'desactivado' : 'activado'}`} onClick={handleOnIncreasePagina} disabled={ paginaActual >=  ultimaPaginaRound }> Siguiente </button>
        <button className={`paginacion-boton ${paginaActual >= ultimaPaginaRound ? 'desactivado' : 'activado'}`} onClick={handleOnUltimaPagina} disabled={ paginaActual >= ultimaPaginaRound }> Ultima </button>
      </div>
    </div>
  )
}
