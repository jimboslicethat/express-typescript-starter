"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 3000;
app.listen(PORT, function () {
    console.log("App is listening on " + PORT);
});
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
//# sourceMappingURL=index.js.map