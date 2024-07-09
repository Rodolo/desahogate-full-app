
/*
    Rutas de Publicaciones
    host + /api/auth
*/

const { startGetPublicaciones, startGetPublicacionByDestinatario, startGetTotalPublicaciones,startGetTotalPublicacionesByDestinatario, startGuardarPublicacion } = require('../controllers/publicaciones')
const { Router } = require('express');
//const { check } = require('express-validator');

//const { fieldValidator } = require('../middlewares/fieldValidator');
//const { validarJWT } = require('../middlewares/jwtValidator')

const router = Router();

// const nameValidator =  check('name', 'El nombre es obligatorio').not().isEmpty();
// const emailValidator = check('email', 'El email es obligatorio').isEmail();
// const passValidator =  check('password', 'El password debe de ser de 6 caracteres o mas').isLength({ min: 6})


router.get('/pag/:pagina', startGetPublicaciones);

router.get('/nombre/:destinatario/pag/:pagina', startGetPublicacionByDestinatario);

router.get('/total/', startGetTotalPublicaciones);

router.get('/nombre/:destinatario/total', startGetTotalPublicacionesByDestinatario);

router.post('/', startGuardarPublicacion);
     

module.exports = router;