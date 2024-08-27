
var mysql = require('mysql');

var ConnectionFactory = function(){
    return mysql.createConnection({host : 'localhost',user : 'root', password : '', database : 'segi'});
};

module.exports = function(){
    return ConnectionFactory;
}
