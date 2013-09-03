

function postToFeed() {
  alert("start of posttofeed alert");
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
  )// End call to FB.ui
} // End postToFeed

function requestToFriends(friends) {
  alert("this is request to friends");
  FB.ui({
    method: 'apprequests',
    to:    friends
  });// End call to FB.ui
}// End requestToFriend

function noticeToFriends() {
  alert("this is notice to friend");
  $.ajax({
    url: 'https://graph.facebook.com/100005765168375/notifications?access_token=CAAJryvQ7mroBAAcwWX6GfUh0Lc46a8EaZCckCiCAPtV8LpAtZB07upZBFuoqE8y8lepTV0l3Aa2fhZAYANb7lSQtlhBzcJLDjmesi8ZBK5QrF5jihA3aAePrhsNPkigT7Ezq5dZAOgTZBYHfNdHvONC&href=/discover&template=Check out this song!'
    //type: 'POST'
  });// end ajax call
}// end noticeToFriend

function callback() {
   alert('hello');
}//end callback 
 
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







  