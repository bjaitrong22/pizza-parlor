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

function handleForm (event) {
  event.preventDefault;
  
  const toppings = document.querySelectorAll("input[name=toppings]:checked");
  const pizzaSize = document.querySelector("input[name='size']:checked").value;

  const toppingsArray = Array.from(toppings);
  
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaOrder").addEventListener("submit", handleForm);
});