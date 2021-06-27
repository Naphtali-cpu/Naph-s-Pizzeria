// Business logic constructor

function pizza(getSize, getCrust, getCheese, getQuantity) {
  this.getSize = getSize;
  this.getCrust = getCrust;
  this.getCheese = getCheese;
  this.getQuantity = getQuantity;
}

    var userInput = new Order(getSize(), getCrust(), getCheese(), getQuantity());

// form submission function
function getSize() {
  var size = document.getElementById("pizzaSize").value;
  return parseInt(size);
}

function getCrust() {
  var crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}


function getCheese() {
  var cheese = document.getElementById("pizzaCheese").value;
  return parseInt(cheese);
}

function getQuantity() {
  var number = document.getElementById("quantity").value;
  return parseInt(number);
}

/* function to calculate the total amount */
function totalAmount() {
  var totals = (getSize() + getCrust() + getCheese()) * getQuantity();
  alert(
    "You have Ordered " +
    getQuantity("") +
    " pizza," +
    "" +
    " amounting to ksh. " +
    totals +
    "" +
    " Thanks for your order welcome again."
  );

  // variable to get the location of the customer
  var location = prompt("If you want your pizza to be delivered to you please enter your location and if not cancel.");
  if (location !== "") {
    alert("You order will be delivered shortly.Delivery fee is 100/= and incase you didn,t want it delivered please come for your order.");
  }
}

$(document).ready(function(){
  $("form#form34A").submit(function(event){
    // event.preventDefault();
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});

