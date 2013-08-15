

function postToFeed() {
  alert('this is firing');
  FB.ui({
    method: 'feed',
    name: "hello,this is a test",
    caption: 'testing2',
    description: 'testing3'
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
  alert("this is right");
  //$.ajax("https://www.facebook.com/dialog/apprequests?", {
  //app_id=115393751997458&
  //to=100005817697208&
  //message=Sign%20up%20for%20Clout%20Tune!&
  //redirect_uri=http:"localhost:3000"}
//)
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
  );
  



  alert("this is wrong");
} // messageToFriend





  