var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
	// res.send('<h1> Hello World </h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('A user connected')
	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});

  	socket.on('chat message', function(msg){
    	// console.log('message: ' + msg);
    	io.emit('chat message', msg);
  	});
});

http.listen(3006, function(){
	console.log("Listening on port: 3006");
});
