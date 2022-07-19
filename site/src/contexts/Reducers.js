const reducer = (state, action) => {
  const payload = action.payload
  switch (action.type){
    case "add":
      return addProduct(state, payload)
    case "remove":
      return removeProduct(state, payload)
    case "tip":
      return { ...state, tip: payload }
    case "login":
      return { ...state, user: payload}
    case "logout":
      return { ...state, user: undefined}
    default: break;
  }
}

const addProduct = (state, product) => {
  const cart = [ ...state.cart]
  const index = cart.findIndex(prod => prod.id === product.id)
  if (index === -1) {
    cart.push(product)
  } else {
    cart[index] = product
  }

  return { ...state, cart}
}

const removeProduct = (state, product) => {
  const cart = [ ...state.cart]
  const index = cart.findIndex(prod => prod.id === product.id)
  cart.splice(index, 1)
  return { ...state, cart}
}


export {
  reducer
}