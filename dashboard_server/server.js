const app = require('express')();
app.set('port', process.env.PORT || 3001);

app.get("/", (req, res) => {
    console.log('requested /')
})

app.get("/test", (req, res) => {
    console.log('requested /test')
})

app.listen(app.get('port'), () => {
    console.log(`Running server on: http://localhost:${app.get('port')}/`);
})