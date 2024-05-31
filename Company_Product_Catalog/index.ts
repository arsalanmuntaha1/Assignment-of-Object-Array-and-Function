//-------------------------------------------------> ASSIGNMENT NO-3 <-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------> COMPANY PRODUCT CATALOG <-----------------------------------------------------------------------------------------------------------

type Mbl = {
  name: string;
  model: string | number;
  quantity: number;
  cost: number;
};

let mbl: Mbl = {
  name: "Samsung",
  model: "Galaxy S24 Ultra",
  quantity: 120,
  cost: 399999,
};

let mbl1: Mbl = {
  name: "Infinix",
  model: "GT 20 Pro",
  quantity: 60,
  cost: 99999,
};

let mbl2: Mbl = {
  name: "Apple",
  model: "Iphone 15 Pro",
  quantity: 50,
  cost: 419600,
};
const inventory = [mbl, mbl1, mbl2];
console.log(inventory[2].quantity, "mbl2-quantity:"); //Accessing the quantity property of index 2 from inventory array.    --->output: 50
console.log(inventory[0], "mbl-all-Properties:"); //Accessing all the properties of index 0 from inventory array.   --->output: {name: 'Samsung',model: 'Galaxy S24 Ultra',quantity: 120, cost: 399999}

let mbl3: Mbl = {
  name: "Google",
  model: "Google Pixel 8 pro",
  quantity: 20,
  cost: 259999,
};
inventory.push(mbl3); //Adding new object to the inventory array.
console.log(inventory[3].model, "mbl3-model:"); //Accessing the model property of index 3 from inventory array.
