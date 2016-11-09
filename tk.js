(function(window, undefined) {

  var tk = function() {
    return new tk.fn.init();
  }

  tk.fn = tk.prototype = {
    constructor: tk,
    init: function(){
      return this;
    },
    add: function(str) {
      console.log(str)
    }
  }
  //改变init的prototype
  tk.fn.init.prototype = tk.fn;
  window.tk = tk();
})(window)
