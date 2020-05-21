var express = require('express');
var PORT = process.env.PORT || 4000;

var app = express();


//app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "digitclassifier.html" );
})

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})