var express =   require('express');
var path    =   require('path');
var app     =   express();
var server  =   require('http').createServer(app);

app.use('/dist', express.static('dist'));

var fbupdates = [];

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/facebook', (req, res) => {
  res.send(fbupdates);
});

app.post('/facebook', (req, res) => {
  fbupdates.push(req);
  res.send();
});

module.exports = app;
