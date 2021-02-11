/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { amount } = useGlobalContext()

  return (
    <header
      css={css`
        background-color: var(--primaryColor);
        color: var(--lightColor);
        padding: 1rem;

        span {
          color: var(--secondaryColor);
          text-shadow: 0.5px 0.5px 2px rgba(255, 255, 255, 0.7);
        }

        h1 {
          color: var(--lightColor);
        }

        .header-container {
          max-width: var(--maxWidth);
          display: flex;
          justify-content: space-between;
          margin: auto;
        }

        .cart-amount {
          display: flex;
          align-items: center;
          position: relative;
        }

        .icon {
          font-size: 3rem;
        }

        p {
          font-size: 1.1rem;
          background: var(--secondaryColor);
          position: absolute;
          top: -10px;
          left: 90%;
          padding: 0.25rem;
          border-radius: var(--borderRadius);
        }
      `}
    >
      <div className="header-container">
        <h1>
          cart<span>y</span>
        </h1>
        <div className="cart-amount">
          <AiOutlineShoppingCart className="icon" />
          <p>{amount}</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
