var pusher = new Pusher("======== KEY ========", { encrypted: true });
var channel = pusher.subscribe('test_channel');
channel.bind('my_event', function(data) {
  var opt = {
    type: 'basic',
    title: data.title,
    message: data.message,
    iconUrl: ""
  }
  chrome.notifications.create("", opt, function(id){ /** Do Nothing */ });  
});