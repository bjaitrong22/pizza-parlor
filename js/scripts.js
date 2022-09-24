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

  pizzaOrder.toppings.forEach(function(e) {
    const p = document.createElement("p");
    p.append(e.value);
    document.body.append(p);
  });

  const p = document.createElement("p");
  p.append(pizzaOrder.cost());
  document.body.append(p);

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