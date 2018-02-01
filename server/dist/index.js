"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiserver_1 = require("./apiserver");
var port = process.env.PORT || '3000';
var app = new apiserver_1.default();
app.start(port);
