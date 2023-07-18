import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
  const {method, url} = request;

  if(method === 'GET' && url === '/users') {
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'Jonh doe',
      email: 'jonh@email.com'
    });

    return response.end('Criação de usuário')
  }

  return response.end('Hello world');
});

server.listen(3333);


//Metodos HTTP

// GET => Buscar um recurso do backend
// POST => Criar um recurso no backend
// PUT => Atualizar um recurso no backend
// PATCH => Atualizar uma informação especifica de um recurso no backend
// DELETE => deletar algum recurtso no backend

//GET /users => Buscando usuários no backend
//POST /users => Criando um usuário no backend


//Cabeçalhos (Requisição/reponsta) => Metadados

