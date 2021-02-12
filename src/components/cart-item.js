/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article
      css={css`
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        grid-column-gap: 1.5rem;
        margin: 1.5rem 0;
        padding: 1rem;

        img {
          width: 8rem;
          height: 8rem;
          object-fit: cover;
        }

        .price {
          color: var(--secondaryColor);
        }

        .remove {
          border: transparent;
          background: var(--primaryColor);
          color: var(--lightColor);
          padding: 0.25rem 0.5rem;
          border-radius: var(--borderRadius);
          font-family: var(--fontFamily);
        }

        .btn-container {
          display: flex;

          button {
            border: transparent;
            font-size: 1.5rem;
          }
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
