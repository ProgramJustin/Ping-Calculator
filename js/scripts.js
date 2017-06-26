
//BACK-END LOGIC
//alert users if they don't enter numbers
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function (number) {

  var result = [];
  for (var i = 1; i <= number; i ++) {
    if (i % 15 === 0) {
      result.push("pingpong");
    } else if (i % 3 === 0) {
      result.push("ping");
    } else if (i % 5 === 0) {
      result.push("pong");
    } else {
      result.push(i);
    }
  }
    return result;

};

Calculator.prototype.addition = function (number1, number2) {

return number1 + number2;

};

Calculator.prototype.subtraction = function (number1, number2) {

return number1 - number2;

};

Calculator.prototype.multiply = function (number1, number2) {

return number1 * number2;

}

Calculator.prototype.divide = function (number1, number2) {

return number1 / number2;

};


exports.calculatorModule = Calculator;
