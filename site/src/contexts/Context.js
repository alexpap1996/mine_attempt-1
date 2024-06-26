import { createContext, useContext, useReducer } from 'react'
import { reducer } from './Reducers'

const State = createContext()

// Context aka Global State of the entire site
// any information held here can be accessed by any component
// and through the reducer method 'dispatch' any component can modify the Context
// 
// holds info: cart (products), cart tip, user (loggedIn), currentLanguage
const Context = ({ children }) => {
  
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')) || undefined
  const currentLanguage = localStorage.getItem('language') || 'en'
  const cart = JSON.parse(sessionStorage.getItem("cart")) || []

  if (localStorage.getItem('i18NextLng')?.includes('-')) {
    localStorage.setItem('i18NextLng', localStorage.getItem('i18NextLng').split('-')[0] )
  }

  const [state, dispatch] = useReducer(reducer, {
    cart,
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