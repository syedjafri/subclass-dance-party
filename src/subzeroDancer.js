var SubzeroDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
subzeroDancer.prototype = Object.create(Dancer.prototype);
subzeroDancer.prototype.constructor=subzeroDancer;
subzeroDancer.prototype.step=function(){
  Dancer.prototype.step.call(this);


};