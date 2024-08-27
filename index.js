var app = require('./config/express')();
var rotasProdutos = require('./app/routes/rotas')(app);

app.listen(3000, function(){
    console.log("BEM VINDO A SEGI!!");
});