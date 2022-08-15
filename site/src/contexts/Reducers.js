// holds the methods that are called when a component calls dispatch
// according to the action type the appropriate method is called
// after modifying the global state accordingly, it returns it
const reducer = (state, action) => {
  const payload = action.payload
  switch (action.type){
    case "add":
      return addProduct(state, payload, false)
    case "edit":
      return addProduct(state, payload, true)
    case "remove":
      return removeProduct(state, payload)
    case "tip":
      return { ...state, tip: payload }
    case "login":
      return loginUser(state, payload)
    case "logout":
      return logoutUser(state, payload)
    case "change_language":
      return changeLanguage(state, payload)
    case "update_user":
      return updateUser(state, payload)
    case "order_rated":
      return orderRated(state, payload)
    default: 
      return state
  }
}

// add a product to the global state cart
const addProduct = (state, product, edit = false) => {
  const cart = [ ...state.cart]
  const index = cart.findIndex(prod => prod._id === product._id)
  if (index === -1) {
    cart.push(product)
  } else {
    cart[index] = { 
      ...product,
      quantity: product.quantity + (!edit ? cart[index].quantity : 0)
    }
  }

  sessionStorage.setItem("cart", JSON.stringify(cart))

  return { ...state, cart}
}

// remove a product from cart
// if no product is passed just empties the cart
// also saves the current cart to sessionStorage so it's saved
const removeProduct = (state, product) => {
  let cart = [ ...state.cart]
  if (product === null) {
    cart = []
  } else {
    const index = cart.findIndex(prod => prod._id === product._id)
    cart.splice(index, 1)
  }
  sessionStorage.setItem("cart", JSON.stringify(cart))
  return { ...state, cart}
}

// saves user in the state and local or session storage according to the persist boolean
const loginUser = (state, payload) => {
  const { persist, user } = payload
  if (persist) localStorage.setItem("user", JSON.stringify(payload.user))
  else sessionStorage.setItem("user", JSON.stringify(payload.user))
  return { ...state, user}
}

// logs out user by clearing the entirety of the local and session storages
const logoutUser = (state, user) => {
  localStorage.clear()
  sessionStorage.clear()
  return { ...state, user: undefined}
}

// changes and holds the current language in the state
const changeLanguage = (state, payload) => {
  localStorage.setItem('language', payload.language)
  return { ...state, currentLanguage: payload.language}
}

// updates the user in the state with any new incoming information
// if the user is saved in the localStorage it also updates that
// same in sessionStorage
const updateUser = (state, payload) => {
  const user = payload.user
  if (localStorage.getItem('user')) localStorage.setItem('user', JSON.stringify(user))
  else sessionStorage.setItem('user', JSON.stringify(user))
  return { ...state, user}
}

// save the incoming order status as 'rated'
const orderRated = (state, payload) => {
  const orderId = payload.orderId
  const user = state.user
  const orderIndex = user.orders.findIndex(order => order._id === orderId)
  user.orders[orderIndex] = {
    ...user.orders[orderIndex],
    status: 'rated'
  }
  updateUser(state, { user })
  return { ...state, user}
}


export {
  reducer
}