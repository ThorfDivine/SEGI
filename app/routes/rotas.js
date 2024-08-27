/* função responsavel por renderisar na tela*/

module.exports = function (app) {
    /*app.get('/clientes', function (request, response) {

        var connection = app.infra.connectionFactory();
        var DAO = new app.infra.DAO(connection);

        DAO.listarClientes(       
            function(err, results)
            {
                response.render('clientes', {lista:results}); 
            }
        )
      
        connection.end();
    });*/

   /*
      exemplo registro de cliente com parte do routes

      app.post("/clientes", function (request, response) {
      
          comando para criar um objeto que armazena o 
              conteúdo dos campos do body
              
          var cliente = request.body;
          var connection = app.infra.connectionFactory();
          var clientesBanco = new app.infra.ClientesDAO(connection);
          clientesBanco.salva(cliente, function (err, results) {
            response.redirect("/clientes");
          });
        });
      
   
   */
    //middleware responsavel por verificar se a pessoa esta devidamente logada
    function verificaAutenticacao(request, response, next) {
        if(request.session.usuario){
            next();
        }
        else{
            response.redirect("/login");
        }
    } 

    
  app.get('/', function (request, response) {
       response.render('index');               
   });
  app.get('/quemSomos', function (request, response) {
      response.render('somos');               
   });
  app.get('/ERP', function (request, response) {
       response.render('ERP');               
   });
  app.get('/academia', function (request, response) {
      response.render('academia');               
  });
  app.get('/login', function (request, response) {
       response.render('login');               
   });
  app.get('/direitos', function (request, response) {
      response.render('direitos');               
   });
  app.get('/direitos', function (request, response) {
      response.render('direitos');               
   });
  app.get('/HomeAluno', function (request, response) {
      response.render('HomeAluno');               
   });

    // exemplo de paginas na quais precisam estar logadas
    /*
        app.get('/cadastro', verificaAutenticacao, function (request, response) {
               
              response.render('cadastro', {usuario: resquest.session.usuario});               
           });
    */

    
   //---------------------login----------------------//
   app.post("/login", function (request, response) {
    var usuario = request.body;
    var connection = app.infra.ConnectionFactory();
    var usuarioBanco = new app.infra.usuarioDAO(connection);
    usuarioBanco.executaLogin(usuario, function (err, results) {

        if (err) {
            console.error('Erro na verificação do login:', err);
            response.status(500).send("Erro no servidor. "+err);
            return;
        }

        if (results.length === 0) {
            // Se não encontrou nenhum usuário
            response.status(401).send("RM ou senha inválidos.");
        } else {
            //a depender do tipo de usuario guarda as informações na session.
            const usuario = results[0];
            if(usuario.tipo == "professor"){
                   request.session.usuario ={
                       nome: usuario.nome, 
                       materia: usuario.materia,
                       rm: usuario.rm,
                       email: usuario.email,
                       tipo: "professor"
                   };
            }
            else{
                request.session.usuario ={
                       nome: usuario.nome, 
                       serio: usuario.serie,
                       rm: usuario.rm,
                       email: usuario.email,
                       tipo: "aluno"
                   };
            }

            // Usuário encontrado           
            response.redirect("/HomeAlunos"); // Redireciona para a página desejada
        }
    });
});

}
