/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article
      css={css`
        img {
          width: 100px;
          height: 100px;
        }
      `}
    >
      {/* image */}
      <img src={img} alt={title} />

      {/* phone info */}
      <div className="info">
        <h4 className="title">{title}</h4>
        <h4 className="price">{price}</h4>
        <button className="remove">remove</button>
      </div>

      {/* increase/decrease buttons */}
      <div className="btn-container">
        <button className="increase">
          <BsArrowUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="decrease">
          <BsArrowDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
