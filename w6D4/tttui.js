(function(root) {
  var TTT = root.TTT = (root.TTT || {})

  var UI = TTT.UI = function(gamespace) {
    this.game = new TTT.Game();
    this.gamespace = gamespace;
    this.$el = gamespace;
  }

  UI.positions = [
    [0,0],
    [0,1],
    [0,2],
    [1,0],
    [1,1],
    [1,2],
    [2,0],
    [2,1],
    [2,2]
  ]

  UI.prototype.setUpSquares = function() {
    var htmlString = "";
    var ele = this.$el;

    _.times(9, function(idx) {
      htmlString = "<div class='square' id='" + idx + "'></div>";
      ele.append(htmlString);
        // var $div = $(htmlSt)
    });
  };

  UI.prototype.setUpEvents = function() {
    // this.$el.click('.square', this.turn.bind(this));

    this.$el.click('.square', this.handleInput.bind(this));
    // $('#input_button').click(this.handleInput.bind(this));
  };

  UI.prototype.handleInput = function(event){
    var pos = UI.positions[event.target.id]

    this.game.turn(pos);
  };

  UI.prototype.updateDiv = function(pos, mark) {
    var divId = "#" + (pos[0] * 3 + pos[1]);
    $(divId).html(mark);
    $(divId).addClass(mark);
  }

})(this);