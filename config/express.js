var express =  require('express');
var load = require('express-load');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(){

    var app = express();
    app.use(express.static('public'));


    // Configura o middleware do express-session
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: '', // Substitua por uma chave secreta segura
        saveUninitialized: false // Não criar uma sessão para usuários não autenticados
    }));

    
    app.set('view engine','ejs');
    app.set('views','./app/views'); 
    load('routes', {cwd: 'app'})
        .then('infra') 
        .into(app);
    return app;
}
