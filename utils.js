// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return w * h 
}

const perimeter = (w, h) => {
  // should return the perimeter
  return 2 * w + 2 * h
}

const circleArea = r => {
  // should return the area of the circle
  return Math.PI * r**2
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  for (i of shoppingCart) {
    if (i.name === item.name && i.price === item.price) {
      i.quantity += item.quantity
      return 
    }
  } 
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  let total = 0 
  for (i of shoppingCart) {
    total += i.quantity
  }
  return total
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  for (i of shoppingCart) {
    if (i.name === item.name && i.price === item.price) {
      i.quantity -=item.quantity
      return
    }
  }
  shoppingCart.pop(i)
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
