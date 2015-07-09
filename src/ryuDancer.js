var RyuDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
RyuDancer.prototype = Object.create(Dancer.prototype);
RyuDancer.prototype.constructor=RyuDancer;
RyuDancer.prototype.step=function(){
  Dancer.prototype.step.call(this);

  // var styleSettings = {
  //   width: '200px',
  //   height: '200px',
  //   transform: 'translate(20px, 20px)'
  // };
  var $ryuSan = $('.ryu').last();
  this.$node.removeClass("dancer").addClass("ryu");
  $ryuSan.animate({
    "left": "-=10px"
  }, 1000, function(){
    //$ryuSan.addClass("spins");
    $ryuSan.css( "left: -=800px" );
  });
  //setTimeout(this.step.bind(this), this._timeBetweenSteps);
  //setTimeout( this.step.bind(this), 6500);

};
