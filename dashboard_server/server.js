const http = require('http');
const app = require('express')();
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('user connected');

  socket.on('message entered', message => {
    console.log(message);
    setTimeout(() => {
      socket.emit('server message', 'ahoy m8e');
    }, 1500);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
  console.log('requested /');
});

app.get('/test', (req, res) => {
  console.log('requested /test');
});

server.listen(app.get('port'), () => {
  console.log(`Running server on: http://localhost:${app.get('port')}/`);
});
