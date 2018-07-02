const http = require('http');
const app = require('express')();
const server = http.createServer(app);
const io = require('socket.io')(server);

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://<user>:<pass>@ds125001.mlab.com:25001/mealinfo';
var db;
var debug = true;

MongoClient.connect(
  MONGO_URL,
  (err, client) => {
    if (err) {
      return console.log(err);
    } else {
      console.log('Successfully connected to Database');
    }

    db = client.db('mealinfo');
    let meals = db.collection('meals');

    if (debug) {
      return;
    }

    // Do something with db here, like inserting a record
    meals.insertOne(
      {
        title: 'Hello MongoDB',
        text: 'Hopefully this works!'
      },
      function(err, res) {
        if (err) {
          client.close();
          return console.log(err);
        }
        // Success
        console.log('document added');
        client.close();
      }
    );
  }
);

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
