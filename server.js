const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log('Server started');
app.listen(3000);