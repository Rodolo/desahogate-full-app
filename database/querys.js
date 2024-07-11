const { elementosPorPagina } = require("../utils/utils");


const getTotalPublicaciones = () => {
    return `select count(*) as numElementos from publicaciones`;
}

const getPublicacionesQuery = ({pagina}) => {
    return `WITH tmp AS (
                SELECT id_publicacion, destinatario, mensaje, CAST(fecha_creacion as char) as fecha_creacion, rownum = ROW_NUMBER() OVER ( order by fecha_creacion DESC ) FROM publicaciones
                )
            SELECT * FROM tmp WHERE rownum  > ${(pagina - 1) * elementosPorPagina} AND rownum <= ${(pagina) * elementosPorPagina};`
}

const getPublicacionByDestinatarioQuery = ({destinatario, pagina}) => {
    return `WITH tmp AS (
        SELECT id_publicacion, destinatario, mensaje, CAST(fecha_creacion as char) as fecha_creacion, rownum = ROW_NUMBER() OVER ( order by fecha_creacion DESC ) FROM publicaciones WHERE upper(destinatario) = upper('${destinatario}')
        )
    SELECT * FROM tmp WHERE rownum  >= ${(pagina - 1) * elementosPorPagina} AND rownum < ${(pagina) * elementosPorPagina};`
}

const getTotalPublicacionesByDestinatarioQuery = ({destinatario}) => {
    return `select count(*) as numElementos from publicaciones  WHERE upper(destinatario) = upper('${destinatario}')`;
}


const insertPublicacionQuery = ({destinatario, mensaje}) => {
    return `INSERT INTO publicaciones (id_publicacion, destinatario, mensaje, fecha_creacion) VALUES
     ( (SELECT MAX(id_publicacion) + 1 from publicaciones), '${destinatario}' , '${mensaje}', SYSDATETIME());`;
}



module.exports = {
    getTotalPublicaciones,
    getTotalPublicacionesByDestinatarioQuery,
    getPublicacionesQuery,
    getPublicacionByDestinatarioQuery,
    insertPublicacionQuery
}