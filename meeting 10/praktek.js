// Praktek skilvul 1

function luasPersegi(s) {
    return s * s;
}

console.log(luasPersegi(5));


// Praktek 1

function registerUser(name, userType) {

    if (userType === "VIP") {
        return `Welcome VIP, ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

let user = registerUser("Nina", "VIP");
console.log(user);


function applyDiscount(userType, purchaseAmount) {
    let discount;

    if (userType === "VIP") {
        discount = 20;
    } else {
        discount = 10;
    }

    let totalAfterDiscount = purchaseAmount - (purchaseAmount * discount / 100);
return totalAfterDiscount;
}


let result2 = applyDiscount("VIP", 200);
console.log(result2);  


let result3 = applyDiscount("NON VIP", 100);
console.log(result3);




// Praktek 2

function calculatePrice(quantity, pricePerItem, isMember) {
    var discount2;

    if (isMember === true) {
        discount2 = 0.15;
    } else {
        discount2 = 0
    }
    return quantity * pricePerItem * (1 - discount2);
}

console.log(calculatePrice(3, 150, true));

function confirmPurchase(isConfirmed, totalPrice) {

    if (isConfirmed == true) {
        return "Purchase confirmed with total price: " + totalPrice;
      } else {
        return "Purchase not confirmed";
      }
    }
    
    console.log(confirmPurchase(true, 150));
    console.log(confirmPurchase(false, 150));




    //Praktek 3

function checkStock(requestedQuantity, item) {
    if (item >= requestedQuantity) {
      return "Stock sufficient for " + requestedQuantity + ". Current stock: " + item;
    } else {
      return "Stock insufficient for " + requestedQuantity + ". Current stock: " + item;
    }
  }
  
  var stock = checkStock(50, 60);
  console.log(stock);
  
  stock = checkStock(60, 60);
  console.log(stock);
  
  stock = checkStock(70, 60);
  console.log(stock);
  
  function restockItem(additionalStock, item, requestedQuantity) {
    item += additionalStock; 
  
    if (item >= requestedQuantity) {
      return "Restock Complete. Current stock: " + item + ". Required stock: " + requestedQuantity;
    } else {
      return "Restock needed. Current stock: " + item + ". Required stock: " + requestedQuantity;
    }
  }
  
  
  console.log(restockItem(20, 20, 30));



//   Praktek 4


function calculateTax(price, location) {
    if (location == "Jakarta") {
      return price * 0.1;
    } else if (location == "Bandung") {
      return price * 0.05;
    } else {
      return 0;
    }
  }
  
  var finalPrice = calculateTax(10000, "Jakarta");
  console.log(finalPrice);

//   var finalPrice = calculateTax(10000, "Bandung");
//   console.log(finalPrice);

function displayResult(finalPrice, paymentStatus) {
  console.log(finalPrice);

  if (paymentStatus == "paid") {
    return "Payment successful! Total amount: " + finalPrice;
  } else {
    return "Payment pending";
  }
}

console.log(displayResult(finalPrice, "paid")); 
console.log(displayResult(finalPrice, "pending")); 

displayResult()