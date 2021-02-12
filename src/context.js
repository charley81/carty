import React, { useEffect, useContext, useReducer, createContext } from 'react'
import data from './data.js'
import reducer from './reducer'

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
  const increaseAmount = id =>
    dispatch({ type: 'INCREASE_AMOUNT', payload: id })
  const decreaseAmount = id =>
    dispatch({ type: 'DECREASE_AMOUNT', payload: id })

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
