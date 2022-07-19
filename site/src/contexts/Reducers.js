const cartReducer = (state, action) => {
  const payload = action.payload
  switch (action.type){
    case "add":
      return { ...state, cart: [...state.cart, payload]}
    case "remove":
      return { ...state, cart: state.cart.filter(prod => prod.id !== payload.id)}
    case "tip":
      return { ...state, tip: payload }
    default: break;
  }
}
export {
  cartReducer
}