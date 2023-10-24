import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// Query parameters: URL stateful => filtros, paginação, não-obrigatórios
// Route parameters: Identificação de recurso
// Request body: Envio de informações de um formulário

// http:localhost:3333/users?userId=1
// http://localhost:3333/users/1

const server = http.createServer(async (request, response) => {
  const { method, url } = request;
  
  await json(request, response);

  const route = routes.find(route => {
    return route.method === method && route.path === url
  });

  if(route){
    return route.handler(request, response);
  }

  return response.writeHead(404).end('Not Found');
}
);

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