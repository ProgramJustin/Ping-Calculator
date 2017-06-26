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
