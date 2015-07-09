  function getPlayer(){
  $('playerPosition').addClass('player');
  $('.player').sprite({fps: 3, no_of_frames: 5}).activeOnClick().active();
  $('body').flyToTap();
  }
 

