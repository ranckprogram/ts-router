import History from "./history/base";

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

let h = new History("haha")

console.log(h.getName()) 

export default {
  aa,
  a,
};
