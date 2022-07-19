import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './Reducers'

const Cart = createContext()

const Context = ({ children }) => {
  const staticProds = [
    {
      id: '1',
      name: 'orange',
      text: 'Chow mein Noodles',
      price: 1.0,
      description: 'Descriptioooon',
      quantity: 1
    },
    {
      id: '2',
      name: 'orange',
      text: 'Maki rolls',
      price: 1.0,
      description: 'Descriptioooon',
      quantity: 1
    },
  ]

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: staticProds,
    tip: 0,
  })
  return <Cart.Provider value={{ state, dispatch }}>
    {children}
  </Cart.Provider>
}

export default Context
export const CartState = () => {
  return useContext(Cart)
}