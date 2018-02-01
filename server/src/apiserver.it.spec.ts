import App from './apiserver';
import { expect } from 'chai';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import 'mocha';
import { stringify } from 'querystring';

describe('Api Server IT', () => {
  chai.use(chaiHttp);


  it('get all books', (done) => {
    let app: App = new App('3000');
    app.start();
    chai.request('http://localhost:3000').get('/api/books').end((err: any, res: any) => {
      console.log('>>> res: ' + JSON.stringify(res));
      console.log('>>> res: ' + res.body.books);
      console.log('>>> res: ' + res.body.books[0].id);
      console.log('>>> res: ' + res.body.books[0].author);
      console.log('>>> res: ' + res.status);
      done();
      app.stop();
    });


  });
});