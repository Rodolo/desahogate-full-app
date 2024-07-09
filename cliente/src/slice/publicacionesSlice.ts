import { createSlice } from '@reduxjs/toolkit';
import { DataProps } from '../interfaces/interfaces'

// const initialState = [] satisfies DataProps[] as DataProps[];

const initialState = {
      publicaciones: [] satisfies DataProps[] as DataProps[],
      totalPublicaciones: 0,
      paginaActual: 1
}

export const publicacionesSlice = createSlice({
   name: 'desahogate',
   initialState,
   reducers: {
           setPaginaActualInicio: (state) => {
            console.log('setPaginaActualInicio');
            return {...state, paginaActual: 1};
           },
           setPaginaActualIncrease: (state) => {
            console.log('setPaginaActualIncrease');
            return {...state, paginaActual: state.paginaActual + 1};
           },
           setPaginaActualDecrease: (state) => {
            console.log('setPaginaActualDecrease');
            return {...state, paginaActual: state.paginaActual - 1};
           },
           setPaginaActualUltima: (state, {payload}) => {
            console.log('setPaginaActualUltima');
            return {...state, paginaActual: payload};
           },
           setPublicaciones: (state, {payload}) => {
            return {...state, publicaciones: [...payload]};
           },
           setTotalPublicaciones: (state, {payload} ) => {
            const { numElementos } = payload[0];
            return {...state, totalPublicaciones: numElementos};
           },
      }
});
export const { setPaginaActualInicio, setPaginaActualIncrease, setPaginaActualDecrease, setPaginaActualUltima, setPublicaciones, setTotalPublicaciones } = publicacionesSlice.actions;

export default publicacionesSlice.reducer;