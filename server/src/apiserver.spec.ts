import App from './apiserver';
import { expect } from 'chai';
import 'mocha';


describe('Api Server', () => {
  it('create api server', () => {
    let app: App = new App('3000');
    expect(app.port).to.equal('3000');
  });
});