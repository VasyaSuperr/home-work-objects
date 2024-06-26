console.log("Task 1");
// Announcement
const customer = {
  name: "Vasya",
  surname: "Super",
  email: "vasyl.yenakii@gmail.com",
  password: "123qwe456",
  phoneNumber: "+380505111768",
  addressOfResidence: {
    city: "Chernivtsi",
    street: "Heavenly Hudred",
    home: "2-A",
    apartment: "104",
  },
  getAddressOfResidence: function () {
    return customer.addressOfResidence;
  },
  changePhoneNumber: function (newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  },
};

// Call methods
console.log("Full address customer :>> ", customer.getAddressOfResidence());
customer.changePhoneNumber("+380660107250");
console.log("Changed phone number customer :>> ", customer.phoneNumber);

// Add
customer.isMale = true;
console.log("Customer :>> ", customer);

// Delete
delete customer.addressOfResidence;
console.log("Customer :>> ", customer);

// Copy address in memory
const copyCustumer = customer;
copyCustumer.name = "Test";
console.log("copyCustomer :>> ", copyCustumer);

// Copy object
const correctCustomerCopy = Object.assign({}, customer);
correctCustomerCopy.name = "Boris";
console.log("correctCustomerCopy :>> ", correctCustomerCopy);

console.log("Task 2");
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

// Cycle
for (let key in cat) {
  console.log(`${key} --- ${cat[key]}`);
}

console.log("Task 3");
function Book(author, title, year, puplishingHouse, price) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.puplishingHouse = puplishingHouse;
  this.price;
}

const book1 = new Book(
  "Дж. К. Ролінг",
  "Гаррі Поттер і філософський камінь",
  1997,
  "Bloomsbury",
  20
);

Book.prototype.getAgeBook = function () {
  return new Date().getFullYear() - this.year;
};

const ageBook1 = book1.getAgeBook();
console.log("ageBook1 :>> ", ageBook1);

Book.prototype.changePriceBook = function (newPrice) {
  this.price = newPrice;
};

book1.changePriceBook(50);
console.log("book1 :>> ", book1);
