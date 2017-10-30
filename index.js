const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3009, () => console.log('Server Stared'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('home');
});

io.on('connection', socket => {
    socket.on('client_mess', mess => {
        io.emit('server_mess', 'You: ' + mess);
    });
});

require('reload')(app);
