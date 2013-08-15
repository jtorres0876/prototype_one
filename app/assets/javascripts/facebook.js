

function postToFeed(myText) {
  FB.ui({
    method: 'feed',
    'name': myText,
    'caption': 'testing2',
    'description': 'testing3'
  }, function(response) {
    if (response && response.post_id) {
        document.getElementById('mymessage').innerHTML = "Thanks. This has been posted onto your timeline.";
    } else {
        document.getElementById('mymessage').innerHTML = "The post was not published.";
    } //Response from post attempt
  }); // Call to FB.ui
} // postToFeed

function messageToFriend(myText) {
  FB.ui({
    'method': 'send',
    'link': 'www.example.com',
    'name': 'First Message',
    }, function(response) {
        if (response && response.post_id) {
          document.getElementById('mymessage').innerHTML = "Thanks. The message has been sent.";
        } else {
          document.getElementById('mymessage').innerHTML = "The message was cancelled.";
        } //Response from send attempt
  }); // Call to FB.ui
} // messageToFriend

function requestToFriends() {
  
  FB.ui({
    method: 'apprequests',
    to: '100005817697208',
    title: 'View Source Request',
    message: 'Join me and be a part of the View Source revolution!'
  }); // Call to FB.ui
} // messageToFriend





  