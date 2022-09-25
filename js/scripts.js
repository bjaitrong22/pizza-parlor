//Business Logic
function Pizza(toppings,pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.cost = function() {
  let toppingCost = this.toppings.length * 2;
  let cost = 0;

  if (this.pizzaSize === "large") {
    cost = toppingCost + 30;
  }else if (this.pizzaSize === "medium"){
    cost = toppingCost + 25;
  }else {
    cost = toppingCost + 20;
  }

  return cost;
}

//User Interface Logic
function displayCost(pizzaOrder) {
  const form = document.querySelector("form#pizzaOrder");
  form.remove();

  //Replacing welcome message on page
  const br = document.createElement('br');

  document.querySelector("span#welcome").innerText = "From Everyone here at Little Italy's Pizzeria,";
  document.querySelector("span#welcome").append(br);
  document.querySelector("span#welcome").append("Thank you!!");

  //creating div elements for displaying order and cost
  document.querySelector("p#order").innerText = "Here is Your Order Confirmation: ";

  const secondDiv = document.createElement("div");
  const thirdDiv = document.createElement("div");
  const fourthDiv = document.createElement("div");
  
  secondDiv.setAttribute("id","secondDiv");
  secondDiv.setAttribute("class","row");
  
  thirdDiv.setAttribute("id", "thirdDiv");
  thirdDiv.setAttribute("class", "col-6");
  
  fourthDiv.setAttribute("id","fourthDiv");
  fourthDiv.setAttribute("class","col-6");
  
  document.querySelector("div").appendChild(secondDiv);
  document.querySelector("div#secondDiv").appendChild(thirdDiv);
  document.querySelector("div#secondDiv").appendChild(fourthDiv);

//cost display message
  const p2 = document.createElement("p");
  const costString = "your total is: $" + pizzaOrder.cost();
  p2.append(costString);
  document.querySelector("div#thirdDiv").append(p2);

 //order confirmation 
  const p0 = document.createElement("p");
  p0String = "A " + pizzaOrder.pizzaSize + " Pizza with: ";
  p0.append(p0String);
  document.querySelector("div#fourthDiv").appendChild(p0);

  pizzaOrder.toppings.forEach(function(e) {
    const p1 = document.createElement("p");
    p1.append(e.value);
    document.querySelector("div#fourthDiv").appendChild(p1);
  });

  const form2 = document.createElement("form");
  form2.setAttribute("id","orderPage");
  document.querySelector("div#thirdDiv").append(form2);

  let orderPagebutton = document.createElement("input");
  orderPagebutton.setAttribute("type","reset");
  orderPagebutton.setAttribute("id","resetBtn");
  orderPagebutton.setAttribute("value","orderPage");

  document.querySelector("form#orderPage").append(orderPagebutton);



}

function handleForm(event) {
  event.preventDefault;
  
  const toppings = document.querySelectorAll("input[name=toppings]:checked");
  const pizzaSize = document.querySelector("input[name='size']:checked").value;
  const toppingsArray = Array.from(toppings);

  let pizzaOrder = new Pizza(toppingsArray,pizzaSize);
  
  displayCost(pizzaOrder);
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaOrder").addEventListener("submit", handleForm);

});