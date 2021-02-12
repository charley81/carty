const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload),
    }
  }
  if (action.type === 'INCREASE_AMOUNT') {
    const tempCart = state.cart.map(item => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE_AMOUNT') {
    const tempCart = state.cart
      .map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter(item => item.amount !== 0)
    return { ...state, cart: tempCart }
  }
  throw new Error('no matching action type')
}

export default reducer
