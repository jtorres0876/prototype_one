function postToFeed(){alert("this is a posttofeed alert"),FB.ui({method:"feed",name:"Facebook Dialogs",link:"https://developers.facebook.com/docs/reference/dialogs/",picture:"http://fbrell.com/f8.jpg",caption:"Reference Documentation",description:"Dialogs provide a simple, consistent interface for applications to interface with users."},function(e){e&&e.post_id?alert("Post was published."):alert("Post was not published.")})}function messageToFriend(){FB.ui({method:"send",link:"www.example.com",name:"First Message"},function(e){document.getElementById("mymessage").innerHTML=e&&e.post_id?"Thanks. The message has been sent.":"The message was cancelled."})}function requestToFriends(){alert("this is right"),alert("this is wrong")}