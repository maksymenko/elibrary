import * as express from "express";
import * as cors from "cors";

class ApiServer {
  env: string = process.env.NODE_ENV || 'dev';
  corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
  }
  appExpress = express();


  constructor() {
    this.mountRoutes();

    console.log('test server created: ' + this.env);
  }

  private mountRoutes() {
    this.appExpress.use(cors(this.corsOptions));

    this.appExpress.route('/api/books/').get((req, resp) => {
      resp.send({
        books: [{
          id: 'id_1',
          isbn: 1234,
          author: 'author name',
          title: 'book title'
        }]
      });
    });

    this.appExpress.route('/api/books/:isbn').get((req, resp) => {
      let isbn = req.params['isbn'];
      resp.send({
        isbn: isbn
      });
    });

  }

  start(port:string) {
    this.appExpress.listen(port, () => { console.log('server started') });
    console.log('Started on port ' + port);
  }
}

export default ApiServer;
