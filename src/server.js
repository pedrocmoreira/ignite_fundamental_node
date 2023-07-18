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

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end('Not Found');
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


//HTTP status code
//100 - 199 => status code informativo 
//200 - 299 => status code de sucesso
//300 - 399 => status code para redirect
//400 - 499 => status client error responses (gerados pelo lado do cliente)
//500 - 599 => status server error responses (gerados pelo servidor)