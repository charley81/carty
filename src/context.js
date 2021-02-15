import React, { useEffect, useContext, useReducer, createContext } from 'react'
import data from './data.js'
import reducer from './reducer'
const url = `https://course-api.com/react-useReducer-cart-project`
const AppContext = createContext()

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const removeItem = id => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const toggleAmount = (id, type) =>
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
