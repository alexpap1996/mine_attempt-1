import { createContext, useContext, useReducer } from 'react'
import { reducer } from './Reducers'

const State = createContext()

const Context = ({ children }) => {
  
  const user = localStorage.getItem('user') || sessionStorage.getItem('user') || undefined
  const currentLanguage = localStorage.getItem('language') || 'en'
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    tip: 0,
    user,
    currentLanguage
  })
  return <State.Provider value={{ state, dispatch }}>
    {children}
  </State.Provider>
}

export default Context
export const GlobalState = () => {
  return useContext(State)
}