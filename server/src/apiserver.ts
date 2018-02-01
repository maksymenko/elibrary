import * as express from "express";
import * as http from "http";
import * as cors from "cors";
import * as bodyParser from "body-parser"; 


class ApiServer {
  private env: string = process.env.NODE_ENV || 'dev';
  private corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
  }
  private _appExpress: express.Application = express();
  private _server: http.Server;


  constructor(private _port: string) {
    this.mountRoutes();

    console.log('test server created for env: ' + this.env);
  }

  public get port(): string {
    return this._port;
  }

  public get appExpress(): any {
    return this._appExpress;
  }

  private mountRoutes() {
    this._appExpress.use(cors(this.corsOptions));
    this._appExpress.use(bodyParser.json());

    this._appExpress.route('/api/books/').get((req, resp) => {
      resp.send({
        books: [{
          id: 'id_1',
          isbn: 1234,
          author: 'author name',
          title: 'book title'
        }]
      });
    });

    this._appExpress.route('/api/books/:isbn').get((req, resp) => {
      let isbn = req.params['isbn'];
      resp.send({
        isbn: isbn
      });
    });

    this._appExpress.route('/api/books').post((req, resp) => {
        let newBook = req.body;
        newBook.createdAt = new Date();
        resp.status(201).send(newBook);
    });

  }

  public start() {
    this._server = this._appExpress.listen(this._port, () => {
      console.log('server started, port ' + this._port)
    });

    process.on( 'SIGTERM', () => {
      console.log('server terminating... ');
      this._server.close();
   });
  }

  public stop() {
    this._server.close();
  }
}

export default ApiServer;
