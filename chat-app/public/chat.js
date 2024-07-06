document.addEventListener('DOMContentLoaded', (event) => {
    var socket = io();
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var messages = document.getElementById('messages');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value) {
        socket.emit('chatMessage', input.value);
        input.value = '';
      }
    });
  
    socket.on('chatMessage', function(msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
  