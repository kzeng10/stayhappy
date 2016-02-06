var express =   require('express');
var path    =   require('path');
var app     =   express();
var server  =   require('http').createServer(app);
var io      =   require('socket.io')(server);

app.use('/dist', express.static(path.join(__dirname, 'dist')));

var fbupdates = [];

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/facebook', (req, res) => {
  if(req.query['hub.verify_token'] === 'stalkingu') res.send(req.query['hub.challenge']);
  else {
    res.send("FAIL");
  }
});

app.get('/viewstatus', (req, res) => {
  res.send(fbupdates);
});

app.post('/facebook', (req, res) => {
  fbupdates.push(req);
  res.send();
});

io.on('connection', (socket) => {
  socket.on('url', (url) => {
    console.log(url);
  });
});

module.exports = app;
