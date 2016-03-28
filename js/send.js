module.exports = function submit(){
  var submit = document.getElementById('submit');

  var username = document.getElementById('username').value;
  var message = document.getElementById('message').value;
  //Print that up.
  console.log(username, message);

  function loadDoc(username, message) {
    var request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    request.send(JSON.stringify({
      name: username,
      message: message,
    }));
  }
  document.getElementById('username').value = '';
  document.getElementById('message').value = '';
  loadDoc(username, message);
};
