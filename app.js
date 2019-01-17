const express = require('express');
const app = express();
const dataFile = require('./data/data.json');
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.set('appData', dataFile)
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/games'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

app.get('chat', (req, res)=>{
    res.send('chat');
})

io.on('connection', (socket) =>{
    console.log('user connected')
});


app.listen(3000, ()=>{
    console.log('running server on port 3000')
});