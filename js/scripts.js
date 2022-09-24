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

  pizzaOrder.toppings.forEach(function(e) {
    const p1 = document.createElement("p");
    p1.append(e.value);
    document.querySelector("div#thirdDiv").append(p1);
  });
  
  const p2 = document.createElement("p");
  const costString = "your total is: $" + pizzaOrder.cost();
  p2.append(costString);
  document.querySelector("div#fourthDiv").append(p2);

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