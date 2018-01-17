import App from './apiserver';

const port:string = process.env.PORT || '3000';

let app = new App();
app.start(port);