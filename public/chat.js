const socket = io.connect('http://localhost:3009');

$('#btnSend').click(() => {
    const message = $('#txtMessage').val();
    socket.emit('client_mess', message);
    $('#txtMessage').val('');
});

socket.on('server_mess', mess => {
    $('#divContent').append(`<p>${mess}</p>`);
});

