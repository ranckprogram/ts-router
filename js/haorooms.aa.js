(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.haorooms = factory());
}(this, (function () { 'use strict';

  var History = /** @class */ (function () {
      function History(name) {
          this.name = name;
      }
      History.prototype.getName = function () {
          return this.name;
      };
      return History;
  }());

  function aa() {
    console.log("aa");
  }

  class Aa {
    name = "a";
    static getName() {}
    getName() {
      console.log(1);
    }
  }

  let a = new Aa();

  let h = new History("haha");

  console.log(h.getName()); 

  var index = {
    aa,
    a,
  };

  return index;

})));
