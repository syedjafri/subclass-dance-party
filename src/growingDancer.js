var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor=GrowingDancer;
GrowingDancer.prototype.step=function(){

//   // //Call old Step function
   Dancer.prototype.step.call(this);
//   // // Add new functionality
//   // this.$node.toggle();
  var style = {
    'border-color': "blue",
    'transform': "scale(1)"
   
  };

  var style2 = {
    transform: "scale(10)",
    'border-color': 'white'
  };

  $('.dancer').mouseover(function(){
    /*$(this).css(style2);*/
    $(this).toggleClass('magictime twisterInDown');
    /*$(this).css(style2);*/

  });

  $('.dancer').mouseout(function(){
    /*$(this).addClass('magictime puffIn');*/
   $(this).css(style2);
  });

};


