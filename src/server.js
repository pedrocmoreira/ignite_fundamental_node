import http from 'node:http';

const server = http.createServer((request, response) => {
  const {method, url} = request;

  if(method === 'GET' && url === '/users') {
    return response.end('Listagem de usuários');
  }

  if(method === 'POST' && url === '/users'){
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

