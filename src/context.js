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

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
