/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import CartItem from './cart-item'
import Title from './title'
import { useGlobalContext } from '../context'

const CartContainer = () => {
  const { cart, total } = useGlobalContext()

  if (cart.length === 0) {
    return (
      <div
        css={css`
          text-align: center;
        `}
      >
        <Title />
        <p>cart empty</p>
      </div>
    )
  }

  return (
    <section>
      {/* card header */}
      <Title />
      {/* list items */}
      {/* footer */}
    </section>
  )
}

export default CartContainer
