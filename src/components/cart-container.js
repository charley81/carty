import React from 'react'
import CartItem from './cart-item'
import { useGlobalContext } from '../context'

const CartContainer = () => {
  const { cart, total } = useGlobalContext()
  return <div>cart container</div>
}

export default CartContainer
