var express = require('express');
var Pusher = require('pusher');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000 || '10.20.89.45';

var pusher = new Pusher({
    appId: '717397',
    key: '093c245dd5699bf9238c',
    secret: '051da6e0af8eede79843',
    cluster: 'ap1',
    encrypted: true
});

app.get("/test",function(req,res){
    res.json({success: 200});
});

app.post('/messages/:room', function(req, res){
    var message = req.body;
    var chatRoom = req.params.room;
    pusher.trigger(chatRoom, 'new_message', message);
    res.json({success: 200});
});

app.listen(port);
console.log('REST API is runnning at ' + port);
