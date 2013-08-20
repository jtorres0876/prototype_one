

function postToFeed() {
  alert("this is a posttofeed alert");
  FB.ui(
    {
      method: 'feed',
      name: 'Facebook Dialogs',
      link: 'https://developers.facebook.com/docs/reference/dialogs/',
      picture: 'http://fbrell.com/f8.jpg',
      caption: 'Reference Documentation',
      description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    },
    function(response) {
      if (response && response.post_id) {
        alert('Post was published.');
      } else {
        alert('Post was not published.');
      }
    }
  )// Call to FB.ui
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
  alert("this is right");
  alert("this is wrong");
} // messageToFriend





  