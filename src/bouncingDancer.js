var BouncingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BouncingDancer.prototype = Object.create(Dancer.prototype);
BouncingDancer.prototype.constructor=BouncingDancer;
BouncingDancer.prototype.step=function(){

//   // //Call old Step function
  Dancer.prototype.step.call(this);
  var style = {
    transform: "scale(3)"
  };

  this.$node.removeClass("dancer").addClass("blanka");
  $('.blanka').mouseover(function(){
    $(this).css(style);
  });

  $('.blanka').mousedown(function(){  
    $(this).toggleClass('magictime bombRightOut');
  });

};


