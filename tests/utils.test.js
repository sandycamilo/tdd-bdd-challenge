const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area", function() {
  const area = utils.area(4,8)
  expect(area).to.be.a("number")
  expect(area).to.equal(32)
})

it("should return the perimeter", function() {
  const perimeter = utils.perimeter(2,2)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(8)
})

it("should return the area of a circle", function() {
  const circleArea = utils.circleArea(3)
  expect(circleArea).to.be.a("number")
  expect(circleArea).to.equal(28.274333882308138)
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  utils.addItemToCart(utils.createItem("apple", 0.99))
  utils.addItemToCart(utils.createItem("apple", 0.99))
  utils.addItemToCart(utils.createItem("boxes", 20.99))
  const item = utils.getShoppingCart()
  expect(item).to.be.a("array")
  expect(item[0]).to.be.a("object")
  expect(item[0]).to.have.property("name", "apple")
  expect(item[0]).to.have.property("price", 0.99)
  expect(item[0]).to.have.property("quantity", 2)
  expect(item[1]).to.be.a("object")
  expect(item[1]).to.have.property("name", "boxes")
  expect(item[1]).to.have.property("price", 20.99)
  expect(item[1]).to.have.property("quantity", 1)
})

it("Should add a new item to the shopping cart", function() {
  utils.addItemToCart(utils.createItem("apple", 0.99))
  utils.addItemToCart(utils.createItem("apple", 0.99))
  utils.addItemToCart(utils.createItem("boxes", 20.99))
  let items = utils.getShoppingCart()
  expect(items).to.be.a("array")  
  expect(items).to.be.a.property("length", 2)
  expect(items[0]).to.have.property("name", "apple")
  expect(items[0]).to.have.property("price", 0.99)
  expect(items[0]).to.have.property("quantity", 2)
  expect(items[1]).to.have.property("name", "boxes")
  expect(items[1]).to.have.property("price", 20.99)
  expect(items[1]).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", function() {
  let items = utils.getShoppingCart()
  expect(items).to.be.a("array")  
  expect(items).to.have.property("length", 0)
  expect(utils.getNumItemsInCart()).to.be.a("number")
  expect(utils.getNumItemsInCart()).to.equal(0)
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  items = utils.getShoppingCart()
  expect(items).to.be.a("array")
  expect(items).to.be.a.property("length", 1)
  expect(items[0]).to.have.property("name", "apple")
  expect(items[0]).to.have.property("price", 0.99)
  expect(items[0]).to.have.property("quantity", 1)
  expect(utils.getNumItemsInCart()).to.be.a("number")
  expect(utils.getNumItemsInCart()).to.equal(1)
})

it("Should remove items from cart"), function() {
  let items = utils.getShoppingCart()
  expect(items).to.be.a("array")  
  expect(items).to.have.property("length", 0)
  expect(utils.getNumItemsInCart()).to.be.a("number")
  expect(utils.getNumItemsInCart()).to.equal(0)
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  items = utils.getShoppingCart()
  expect(items).to.be.a("array")
  expect(items).to.be.a.property("length", 1)
  expect(items[0]).to.have.property("name", "apple")
  expect(items[0]).to.have.property("price", 0.99)
  expect(items[0]).to.have.property("quantity", 1)
  expect(utils.getNumItemsInCart()).to.be.a("number")
  expect(utils.getNumItemsInCart()).to.equal(1)
  utils.removeItemFromCart(item)
  expect(items).to.be.a("array")  
  expect(items).to.have.property("length", 0)
  expect(utils.getNumItemsInCart()).to.be.a("number")
  expect(utils.getNumItemsInCart()).to.equal(0)
}

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
