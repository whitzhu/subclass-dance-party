var MinionDancer = function(top, left, timeBetweenSteps) {
  ClassicDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span><img class="minion" src="https://s-media-cache-ak0.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif"></span>');
};


MinionDancer.prototype = Object.create(ClassicDancer.prototype);
MinionDancer.prototype.constructor = MinionDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
MinionDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  ClassicDancer.prototype.step.call(this);

};

MinionDancer.prototype.jump = function() {
  this.$node.animate({top: '+=300'}, 2000);
  this.$node.animate({top: '-=300'}, 1000);
};
