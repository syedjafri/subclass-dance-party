var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor=BlinkyDancer;
BlinkyDancer.prototype.step=function(){

  //Call old Step function
  Dancer.prototype.step.call(this);
  // Add new functionality
  this.$node.toggle();

};
