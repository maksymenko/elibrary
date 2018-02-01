"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var ApiServer = /** @class */ (function () {
    function ApiServer() {
        this.env = process.env.NODE_ENV || 'dev';
        this.corsOptions = {
            origin: 'http://localhost:8080',
            optionsSuccessStatus: 200
        };
        this.appExpress = express();
        this.mountRoutes();
        console.log('test server created: ' + this.env);
    }
    ApiServer.prototype.mountRoutes = function () {
        this.appExpress.use(cors(this.corsOptions));
        this.appExpress.route('/api/books/').get(function (req, resp) {
            resp.send({
                books: [{
                        id: 'id_1',
                        isbn: 1234,
                        author: 'author name',
                        title: 'book title'
                    }]
            });
        });
        this.appExpress.route('/api/books/:isbn').get(function (req, resp) {
            var isbn = req.params['isbn'];
            resp.send({
                isbn: isbn
            });
        });
    };
    ApiServer.prototype.start = function (port) {
        this.appExpress.listen(port, function () { console.log('server started'); });
        console.log('Started on port ' + port);
    };
    return ApiServer;
}());
exports.default = ApiServer;
