(function(root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {})

  var UI = Hanoi.UI = function(towers) {
    this.game = new Hanoi.Game();
    this.$el = towers;
    this.render();
    this.firstTower = null;
  }

  UI.prototype.render = function() {
    this.$el.html("");
    var towers = this.game.towers;

    for (var i = 0; i < towers.length; i++) {
      var $towerdiv = $('<div>');
      $towerdiv.addClass('tower');
      $towerdiv.attr("data-id", i);

      for (var j = 0; j < towers[i].length; j++) {
        var $discdiv = $('<div>');
        $discdiv.addClass('disc');
        $discdiv.attr("data-id", j);
        $discdiv.text(towers[i][j]);
        $towerdiv.prepend($discdiv);
      }
      this.$el.append($towerdiv);
    }

    this.$el.html();
  };

  UI.prototype.setUpEvents = function() {
    this.$el.click('.tower', this.handleInput.bind(this));
  };

  UI.prototype.handleInput = function(event){

    var target = event.target;
    if (target.className === "disc") {
      target = event.target.parentElement;
    }

    var clickTower = parseInt($(target).attr("data-id"));

    if (this.firstTower === null) {
      this.firstTower = clickTower;
    } else {
      if (this.game.move(this.firstTower, clickTower)) {
        this.render();
        this.firstTower = null;
      }
    }

    $(target).toggleClass('clicked');
  };

  UI.prototype.updateDiv = function(pos, mark) {
    var divId = "#" + (pos[0] * 3 + pos[1]);
    $(divId).html(mark);
    $(divId).addClass(mark);
  }

})(this);