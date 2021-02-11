/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import CartItem from './cart-item'
import { useGlobalContext } from '../context'

const CartContainer = () => {
  const { cart, total } = useGlobalContext()

  if (!cart.length) {
    return (
      <p
        css={css`
          margin: 5vh auto 0;
          text-align: center;
        `}
      >
        cart empty
      </p>
    )
  }

  return <div>cart container</div>
}

export default CartContainer
