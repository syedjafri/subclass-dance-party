var JinDancer=function(){
  RyuDancer.call(this,top, left, timeBetweenSteps);
};
JinDancer.prototype = Object.create(JinDancer.prototype);
JinDancer.prototype.constructor=JinDancer;
JinDancer.prototype.step=function(){
  RyuDancer.prototype.step.call(this);

};