let client = 'Liran';

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};


const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};


const cloneGroceries = () => {
  let user = client; // user is a copy of client

  
  client = 'Ziv';

  let shopping = groceries;


  shopping.totalPrice = "35$";


  shopping.other.paid = false;
};


displayGroceries();


cloneGroceries();


console.log("Client:", client); 
console.log("Total Price:", groceries.totalPrice); 
console.log("Paid:", groceries.other.paid); 
