/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import CartItem from './cart-item'
import Title from './title'
import Footer from './footer'
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
    <section
      css={css`
        max-width: 500px;
        margin: auto;
      `}
    >
      {/* card header */}
      <Title />
      {/* list items */}
      {cart.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      {/* footer */}
      <Footer />
    </section>
  )
}

export default CartContainer
