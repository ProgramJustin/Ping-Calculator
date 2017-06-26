(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
//FRONT-END LOGIC
var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function(){

  $("form#pingPong").submit(function(event){

    var userInput = parseInt($("input#userInput").val());

    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(userInput);
     alert(output);

    $("#list").append("<li>" + output + "</li>")

    event.preventDefault();
  });

  $("form#add").submit(function(event){

    var addInput = parseInt($("input#addInput").val());
    var addInput2 = parseInt($("input#addInput2").val());


    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.addition(addInput, addInput2);
    console.log(output);

    $("#list").append("<li>" + output + "</li>")

    event.preventDefault();
  });

    $("form#subtract").submit(function(event){

      var subInput = parseInt($("input#subInput").val());
      var subInput2 = parseInt($("input#subInput2").val());


      var simpleCalculator = new Calculator("hot pink");
      var output = simpleCalculator.subtraction(subInput, subInput2);



      $("#list").append("<li>" + output + "</li>")

      event.preventDefault();
    });

    $("form#multiply").submit(function(event){

      var multInput = parseInt($("input#multInput").val());
      var multInput2 = parseInt($("input#multInput2").val());


      var simpleCalculator = new Calculator("hot pink");
      var output = simpleCalculator.multiply(multInput, multInput2);



      $("#list").append("<li>" + output + "</li>")

      event.preventDefault();
    });

    $("form#divide").submit(function(event){

      var divInput = parseInt($("input#divInput").val());
      var divInput2 = parseInt($("input#divInput2").val());


      var simpleCalculator = new Calculator("hot pink");
      var output = simpleCalculator.divide(divInput, divInput2);



      $("#list").append("<li>" + output + "</li>")

      event.preventDefault();
    });

});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
