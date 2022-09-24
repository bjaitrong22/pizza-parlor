# Pizza Parlor
By Bai Jaitrong:  
Pizza Parlor  
# Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * JavaScript
  * Web APIs
# Description
A fictional pizza parlor website that will allow users to order a pizza with one or more toppings and pizza size options of small (6"), medium (12"), and large(18"). Once the user has submitted the order, it will create a pizza object with the selected toppings and pizza size along with the cost.

# Setup/Installation Requirements
  * Clone the repository to your desktop or a subdirectory in your desktop by typing **https://github.com/bjaitrong22/pizza-parlor.git**
  * Be careful not to clone the repository inside a local repository. Otherwise, you will have a nested git respository.
  * Navigate to the top level of the directory.
  * Open index.html 

# Showing your work on GitHub pages
  * Use this link to view this web page on **GitHub Pages**: https://bjaitrong22.github.io/pizza-parlor/
  * To create gitHub Pages for your portfolio, type **git branch gh-pages**
  * Switch over to your gh-pages branch, type **git checkout gh-pages**
  * Push your gh-pages branch to GitHub, type **git push origin gh-pages**
  * If you have a nickname for your remote, you can use it in place of **origin** in the above push command.
  * You can view your webpage at **my-github-username.github.io/repository-name**

# Known Bugs
  * XXXXXXXXXXXXXXXXXXXXXXXXXX
# License
 * Portfolio is licensed under the terms of GNU AFFERO GENERAL PUBLIC LICENS Version 3, 19 November 2007

Describe: Pizza()
Test: "It should create a pizza object with toppings and size property"
Code: let myPizza = new Pizza(myToppings,"medium");
Expected Output: myPizza;
Pizza {toppings: ["pepperoni", "canadian bacon", "pineapple", "black olives"], pizzaSize: "medium"}

Describe: Pizza.prototype.cost()
Test: "It should calculate the cost of a medium pizza with 4 toppings to be $33."
Code: myPizza.cost();
Expected Output: 33

Test: "The cost of a large pizza with 4 toppings should cost $38."
Code:myPizza.cost();
Expected Output: 38

Test: "The cost of a small pizza with 4 toppings should cost $28."
Code:myPizza.cost();
Expected Output: 28



