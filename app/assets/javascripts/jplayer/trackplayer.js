
function nextsong(track) {
  $("#jquery_jplayer_1").jPlayer("stop");  
  $("#jquery_jplayer_1").jPlayer( "clearMedia" ); 
  $("#jquery_jplayer_1").jPlayer("setMedia", { // Set the media
      mp3: track
  }).jPlayer("play");
  
} // end next song



function prevsong(track) {
  $("#jquery_jplayer_1").jPlayer("stop");  
  $("#jquery_jplayer_1").jPlayer( "clearMedia" ); 
  $("#jquery_jplayer_1").jPlayer("setMedia", { // Set the media
      mp3: track
    }).jPlayer("play"); 
} // end next song




  