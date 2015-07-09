var JinDancer=function(top, left, timeBetweenSteps){
  RyuDancer.call(this, top, left, timeBetweenSteps);
};
JinDancer.prototype = Object.create(RyuDancer.prototype);
JinDancer.prototype.constructor=JinDancer;
JinDancer.prototype.step=function(){
  RyuDancer.prototype.step.call(this);
    this.$node.removeClass("dancer").addClass("jin");

  var $jin = $('.jin').last();
  $jin.animate({
    "left": "-=1000px"
  }, 3000);
 };