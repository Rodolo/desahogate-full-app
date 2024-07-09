const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const { pool } = require('./database/config');
const app = express();
const port = process.env.PORT || 3000; 


const initApp = () => {
//Base de datos
  pool.connect().then( () => {
      console.log('Connection pool created');

      console.log(__dirname)
      // CORS
      app.use(cors());

      // Lectura y parseo del body
      app.use ( express.json() );

      // Servimos el build del Cliente
      app.use( express.static( path.resolve(__dirname, './cliente/dist') ) );
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './cliente/dist', 'index.html'));
      });

      //Rutas de publicaciones
      app.use('/api/publicaciones', require('./routes/publicaciones'));

     

      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });

    }).catch(function(err) {
      console.error('Error creating connection pool', err);
      console.error('Will run app again...');
      initApp();
  });

}



initApp();


