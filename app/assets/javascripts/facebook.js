 window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '115393751997458',               // App ID from the app dashboard
      channelUrl : 'channel.html',   				// Channel file for x-domain comms
      status     : true,                            // Check Facebook Login status
      frictionlessRequests : true,                  // enable frictionless requests
      xfbml      : true                             // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
    
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
        alert("the user isnt logged in to Facebook");
      } else {
         alert("the user isnt logged in to Facebook");
      }
     }); //loginstatus

  }; //window async
  
  
  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


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
          title: 'View Source Request',
          message: 'Join me and be a part of the View Source revolution!'
      }); // Call to FB.ui
    } // messageToFriend





  