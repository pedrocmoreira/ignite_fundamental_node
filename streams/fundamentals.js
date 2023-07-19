//Streams => 

import { Readable, Transform, Writable } from 'node:stream';

//Readable => leitura
class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000)
  }
}

//Transform => leitura e escrita
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * -1)

    callback(null, Buffer.from(String(transformed)))
  }
}

//Writable => escrita
class MultiplyByTenstream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback();
  }
}


new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenstream());