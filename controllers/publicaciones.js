const { response } = require('express');
const { executeDBQuery } = require('../database/config')
const { getPublicacionesQuery, getPublicacionByDestinatarioQuery, getTotalPublicaciones, getTotalPublicacionesByDestinatarioQuery, insertPublicacionQuery } = require('../database/querys');

const OK = 200;
const SUCCESFULLY_CREATED = 201;
const ERROR = 500;

const startGetPublicaciones = async(req, res = response) => {
    console.log('startGetPublicaciones');
    const data = req.params;
    console.log(data);
  // const { name, email, password} = req.body;
    try {
       const result = await executeDBQuery(getPublicacionesQuery(data));
    //    const data = await runQuery(getPublicacionesQuery());
       console.log(result);
       res.status(OK).json(result);
    } catch (error) {
        console.log(error);
        res.status(ERROR).json({
            ok: true,
            msg: error
        });
    }
}

const startGetTotalPublicaciones= async(req, res = response) => {
    console.log('startGetPublicaciones');
    const data = req.params;
    console.log(data);
  // const { name, email, password} = req.body;
    try {
       const result = await executeDBQuery(getTotalPublicaciones());
    //    const data = await runQuery(getPublicacionesQuery());
       console.log(result);
       res.status(OK).json(result);
    } catch (error) {
        console.log(error);
        res.status(ERROR).json({
            ok: true,
            msg: error
        });
    }
}




const startGetPublicacionByDestinatario = async(req, res = response) => {
    console.log('startGetPublicacionByDestinatario');
    const data = req.params;
    console.log(data);
    try {
       const result = await executeDBQuery(getPublicacionByDestinatarioQuery(data));
       res.status(OK).json(result);
    } catch (error) {
        console.log(error);
        res.status(ERROR).json({
            ok: true,
            msg: error
        });
    }
}

const startGetTotalPublicacionesByDestinatario = async(req, res = response) => {
    console.log('startGetTotalPublicacionesByDestinatario');
    const data = req.params;
    console.log(data);
    try {
       const result = await executeDBQuery(getTotalPublicacionesByDestinatarioQuery(data));
       res.status(OK).json(result);
    } catch (error) {
        console.log(error);
        res.status(ERROR).json({
            ok: true,
            msg: error
        });
    }
}

const startGuardarPublicacion = async(req, res = response) => {
    console.log('startGuardarPublicacion');
    try {
        const data = req.body;
        //console.log(data);
        const result = await executeDBQuery(insertPublicacionQuery(data));
       // console.log(result);
        res.status(SUCCESFULLY_CREATED).json(result);
    } catch (error) {
        console.log(error);
        res.status(ERROR).json({
            ok: true,
            msg: error
        });
    }
}

module.exports = {
    startGetPublicaciones,
    startGetPublicacionByDestinatario,
    startGetTotalPublicaciones,
    startGetTotalPublicacionesByDestinatario,
    startGuardarPublicacion
}