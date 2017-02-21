// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  // this.shouldBeStill = true;
  this.step();
  this.setPosition(top, left);
  this.lineup = false;
 
};

  // use jQuery to create an HTML <span> tag
var timer;
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.$node.on('mouseover', function() {
    $(this).addClass('hoverDancer');
  });  

  this.$node.on('mouseleave', function() {
    $(this).removeClass('hoverDancer');
  });


  timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
  this.lineup = true;
  this.$node.clearQueue();
  this.$node.removeClass('slideDancer');
  this.$node.css({position: 'absolute'});
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// Dancer.prototype.setPosition(this.top, this.left);
