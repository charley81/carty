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
  throw new Error('no matching action type')
}

export default reducer
