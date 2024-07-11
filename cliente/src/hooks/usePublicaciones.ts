import { useDispatch, useSelector } from 'react-redux';
import desahogateApi from '../api/api.ts'
import { setPaginaActualInicio, setPublicaciones, setTotalPublicaciones } from '../slice/publicacionesSlice.ts';
import { IRootState } from '../store/store.ts';
import { PublicacionProps, DestinatarioProps } from '../interfaces/interfaces.ts';


export const usePublicaciones = () => {

    const {publicaciones, paginaActual, totalPublicaciones} = useSelector( (state: IRootState)=> state.desahogate);
    const dispatch = useDispatch();

    const setPaginaInicio = () => {
        dispatch(setPaginaActualInicio());
    }

    const getPublicacionesDB = async() => {
        try {
            const { data } = await desahogateApi.get(`/publicaciones/pag/${paginaActual}`, );
            dispatch(setPublicaciones(data));
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const getPublicacionByDestinatarioDB = async({destinatario} : DestinatarioProps) => {
        try {
            const { data } = await desahogateApi.get(`/publicaciones/nombre/${destinatario}/pag/${paginaActual}`);
            dispatch(setPublicaciones(data));
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const getTotalElementosDB = async() => {
        try {
            const { data } = await desahogateApi.get(`/publicaciones/total/`, );
            dispatch(setTotalPublicaciones(data));
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const getTotalElementosByDestinatarioDB = async({destinatario} : DestinatarioProps) => {
        try {
            const { data } = await desahogateApi.get(`/publicaciones/nombre/${destinatario}/total/`);
            dispatch(setTotalPublicaciones(data));
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const guardarPublicacionDB = async({destinatario, mensaje}: PublicacionProps) => {
        try {
            const response = await desahogateApi.post("/publicaciones", {destinatario, mensaje});
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }



    return {
        paginaActual,
        publicaciones,
        totalPublicaciones,
        getPublicacionesDB,
        getPublicacionByDestinatarioDB,
        getTotalElementosDB,
        getTotalElementosByDestinatarioDB,
        guardarPublicacionDB,
        setPaginaInicio
    }
}