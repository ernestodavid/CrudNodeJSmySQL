const express = require('express');
const path = require('path');
const morgan= require('morgan');
const mysql =require('mysql');
const myConnection = require('express-myconnection');


const app = express();
// settings\
//puettos, gestor de plantillas

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: '0.0.0.0',
    user: 'root',
    password: 'strongpassword',
    port:'3306',
    database: 'crudnodejsmysql'
}, 'single'));

//routes

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});