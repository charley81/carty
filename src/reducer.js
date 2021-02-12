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
  if (action.type === 'TOGGLE_AMOUNT') {
    const tempCart = state.cart.map(item => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          return { ...item, amount: item.amount + 1 }
        }
        if (action.payload.type === 'dec') {
          return { ...item, amount: item.amount - 1 }
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  throw new Error('no matching action type')
}

export default reducer
