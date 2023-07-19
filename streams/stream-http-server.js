import http from 'node:http';
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * -1);

    console.log(transformed);

    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer((request, response) => {
  return request
  .pipe(new InverseNumberStream)
  .pipe(response)
});

//request => ReadableStream
//response => WritableStream

server.listen(3334)