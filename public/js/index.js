var socket = io();

 socket.on('connect', function ()  {
     console.log('connected to the server')
    $('h1').text('connected')

    
 });

socket.on('disconnect', function()  {
    $('h1').text('disconnected')

    console.log('Disconnected from the server');
})

socket.on('newMessage', (newMessage) => {
    console.log(newMessage.from);
});