const connectionFactory = require("./ConnectionFactory")

/* função responsavel por consultar o banco da nossa lista */

function DAO(connection){
    this._connection = connection;
}

DAO.prototype.listarClientes=function(callback){
  this._connection.query('select * from clientes', callback);
}
// exemplo de exclusao de algo do banco de dados
DAO.prototype.removeProduto=function(id, callback){
  this._connection.query('delete from ... where id = ?', id, callback)
}

module.exports = function (){

  return DAO;  

}

/*exemplo de insert no DAO:




ClientesDAO.prototype.salva = function (cliente, callback) {
  this._connection.query("insert into clientes set ?", cliente, callback);
};

module.exports = function () {
  return ClientesDAO;
};
*/

