(function (spatula) {
  var P = spatula.P = (spatula.P || {});

  var Painter = P.Painter = function($rootEl){
    this.$el = $rootEl;
    this.color = "";
  };

  Painter.COLORS = [
    'blue',
    'purple',
    'red',
    'perrywinkle',
    'cyan',
    'magenta',
    'green',
    'orange',
    'white',
    'black',
    'grey',
    'yellow',
    'aquamarine',
    'pink'
  ];

  Painter.prototype.setUpCanvas = function(){
    var bigLongHtmlString = "";
    _.times(400, function(){
      bigLongHtmlString += "<div class='square'></div>";
    });

    this.$el.html(bigLongHtmlString);
  };

  Painter.prototype.setUpEvents = function(){
    this.$el.click('.square', this.paintSquare.bind(this));
    $('#color_button').click(this.handleColorChoice.bind(this));
  };

  Painter.prototype.handleColorChoice = function(event){
   event.preventDefault();
   this.color = $('#color_choice').val();
  };

  Painter.prototype.paintSquare = function(event){
    var $square = $(event.target);
    var color = this.color || _.sample(Painter.COLORS);
    $square.css('background-color', color);
  };

})(this);
