var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor=makeBlinkyDancer;
makeBlinkyDancer.prototype.step=function(){

  //Call old Step function
  makeDancer.prototype.step.call(this);
  // Add new functionality
  this.$node.toggle();
};
