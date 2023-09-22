const express = require('express');
const morgan = require('morgan');

const app = express();


//CONFIGURACIONES
app.set('port', process.env.PORT || 3001);


//MIDDLEWARES
app.use(morgan('dev'));


//RUTAS



app.listen(app.get('port'), () => {
    console.log('Escuchando en puerto 3001');
});