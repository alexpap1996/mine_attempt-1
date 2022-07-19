import { createContext, useContext, useReducer } from 'react'
import { reducer } from './Reducers'

const State = createContext()

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    tip: 0,
    user: undefined
  })
  return <State.Provider value={{ state, dispatch }}>
    {children}
  </State.Provider>
}

export default Context
export const GlobalState = () => {
  return useContext(State)
}