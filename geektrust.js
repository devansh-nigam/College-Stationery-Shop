const fs = require('fs');

const filename = process.argv[2];

let cart = {
  Clothing: {
    TSHIRT: 0,
    JACKET: 0,
    CAP: 0,
  },
  Stationery: {
    NOTEBOOK: 0,
    PENS: 0,
    MARKERS: 0,
  },
};

let bill = 0;
let total_bill = 0;
let total_discount = 0;

fs.readFile(filename, 'utf8', (err, data) => {
  var inputLines = data.toString().split('\n');
  inputLines.forEach(input => {
    var ar = input.trim().split(' ');
    if (ar[0] == 'ADD_ITEM') {
      if (ar[1] == 'TSHIRT') {
        let d = 0.1;
        let cost = 1000;
        cart.Clothing.TSHIRT = parseInt(cart.Clothing.TSHIRT) + parseInt(ar[2]);
        if (cart.Clothing.TSHIRT > 2) {
          console.log('ERROR_QUANTITY_EXCEEDED');
        } else {
          bill = bill + cost * parseFloat(ar[2]);
          total_bill += parseFloat(ar[2]) * (cost - d * cost);
          total_discount += parseFloat(ar[2]) * (d * cost);
          console.log('ITEM_ADDED');
        }
      } else if (ar[1] == 'JACKET') {
        let d = 0.05;
        let cost = 2000;
        cart.Clothing.JACKET = parseInt(cart.Clothing.JACKET) + parseInt(ar[2]);
        if (cart.Clothing.JACKET > 2) {
          console.log('ERROR_QUANTITY_EXCEEDED');
        } else {
          bill = bill + cost * parseFloat(ar[2]);
          total_bill += parseFloat(ar[2]) * (cost - d * cost);
          total_discount += parseFloat(ar[2]) * (d * cost);
          console.log('ITEM_ADDED');
        }
      } else if (ar[1] == 'CAP') {
        let d = 0.2;
        let cost = 500;
        cart.Clothing.CAP = parseInt(cart.Clothing.CAP) + parseInt(ar[2]);
        if (cart.Clothing.CAP > 2) {
          console.log('ERROR_QUANTITY_EXCEEDED');
        } else {
          bill = bill + cost * parseFloat(ar[2]);
          total_bill += parseFloat(ar[2]) * (cost - d * cost);
          total_discount += parseFloat(ar[2]) * (d * cost);
          console.log('ITEM_ADDED');
        }
      } else if (ar[1] == 'NOTEBOOK') {
        let d = 0.2;
        let cost = 200;
        cart.Stationery.NOTEBOOK =
          parseInt(cart.Stationery.NOTEBOOK) + parseInt(ar[2]);
        if (cart.Stationery.NOTEBOOK > 3) {
          console.log('ERROR_QUANTITY_EXCEEDED');
        } else {
          bill = bill + cost * parseFloat(ar[2]);
          total_bill += parseFloat(ar[2]) * (cost - d * cost);
          total_discount += parseFloat(ar[2]) * (d * cost);
          console.log('ITEM_ADDED');
        }
      } else if (ar[1] == 'PENS') {
        let d = 0.1;
        let cost = 300;
        cart.Stationery.PENS = parseInt(cart.Stationery.PENS) + parseInt(ar[2]);
        if (cart.Stationery.PENS > 3) {
          console.log('ERROR_QUANTITY_EXCEEDED');
        } else {
          bill = bill + cost * parseFloat(ar[2]);
          total_bill += parseFloat(ar[2]) * (cost - d * cost);
          total_discount += parseFloat(ar[2]) * (d * cost);
          console.log('ITEM_ADDED');
        }
      } else if (ar[1] == 'MARKERS') {
        let d = 0.05;
        let cost = 500;
        cart.Stationery.MARKERS =
          parseInt(cart.Stationery.MARKERS) + parseInt(ar[2]);
        if (cart.Stationery.MARKERS > 3) {
          console.log('ERROR_QUANTITY_EXCEEDED');
        } else {
          bill = bill + cost * parseFloat(ar[2]);
          total_bill += parseFloat(ar[2]) * (cost - d * cost);
          total_discount += parseFloat(ar[2]) * (d * cost);
          console.log('ITEM_ADDED');
        }
      }
    } else if ('PRINT_BILL') {
      //   console.log(cart);
      if (bill >= 1000) {
        if (bill >= 3000) {
          total_discount = total_discount + 0.05 * total_bill;
          total_bill = total_bill - 0.05 * total_bill;
        }
        total_bill = total_bill + 0.1 * total_bill;
        console.log('TOTAL_DISCOUNT', total_discount.toFixed(2));
        console.log('TOTAL_AMOUNT_TO_PAY', total_bill.toFixed(2), '\n');
      } else {
        bill = bill + 0.1 * bill;
        console.log('TOTAL_DISCOUNT', (0.0).toFixed(2));
        console.log('TOTAL_AMOUNT_TO_PAY', bill.toFixed(2), '\n');
      }
    }
  });
});
