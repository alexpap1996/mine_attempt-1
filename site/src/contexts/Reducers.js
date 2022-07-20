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
      return loginUser(state, payload)
    case "logout":
      return logoutUser(state, payload)
    case "change_language":
      return changeLanguage(state, payload)
    default: 
      return state
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

const loginUser = (state, payload) => {
  const { persist, user } = payload
  //TODO: logic for persist, maybe session instead of localStorage
  if (persist) localStorage.setItem("user", JSON.stringify(payload.user))
  else sessionStorage.setItem("user", JSON.stringify(payload.user))
  return { ...state, user}
}

const logoutUser = (state, user) => {
  localStorage.removeItem("user")
  sessionStorage.removeItem("user")
  return { ...state, user: undefined}
}

const changeLanguage = (state, payload) => {
  localStorage.setItem('language', payload.language)
  return { ...state, currentLanguage: payload.language}
}

export {
  reducer
}