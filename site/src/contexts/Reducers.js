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
    default: 
      return state
  }
}

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

const loginUser = (state, payload) => {
  const { persist, user } = payload
  if (persist) localStorage.setItem("user", JSON.stringify(payload.user))
  else sessionStorage.setItem("user", JSON.stringify(payload.user))
  return { ...state, user}
}

const logoutUser = (state, user) => {
  localStorage.clear()
  sessionStorage.clear()
  return { ...state, user: undefined}
}

const changeLanguage = (state, payload) => {
  localStorage.setItem('language', payload.language)
  return { ...state, currentLanguage: payload.language}
}

const updateUser = (state, payload) => {
  const user = payload.user
  localStorage.setItem('user', JSON.stringify(user))
  return { ...state, user}
}


export {
  reducer
}