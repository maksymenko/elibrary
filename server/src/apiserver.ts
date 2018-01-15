import * as express from "express";
import * as cors from "cors";

class ApiServer {
  env: string = process.env.NODE_ENV || 'dev';
  corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
  }
  app = express();

  constructor() {
    console.log('test server stated: ' + this.env);
  }

  start() {
    let app = express()
    app.listen(8000, () => { console.log('server started') });

    app.use(cors(this.corsOptions))

    app.route('/api/books/').get((req, resp) => {
      resp.send({
        books: [{
          id: 'id_1',
          isbn: 1234,
          author: 'author name',
          title: 'book title'
        }]
      });
    });

    app.route('/api/books/:isbn').get((req, resp) => {
      let isbn = req.params['isbn'];
      resp.send({
        isbn: isbn
      });
    });
  }
}

let srv = new ApiServer();
srv.start();