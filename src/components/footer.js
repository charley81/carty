/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useGlobalContext } from '../context'

const Footer = () => {
  const { total, clearCart } = useGlobalContext()
  return (
    <footer
      css={css`
        hr {
          border: 0;
          height: 1px;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0)
          );
          margin-bottom: 2rem;
        }

        h4 {
          display: flex;
          justify-content: space-between;

          span {
            font-size: 1.2rem;
          }
        }

        button {
          background-color: transparent;
          border-color: var(--primaryColor);
          outline: transparent;
          padding: 0.5rem 1.5rem;
          width: 100%;
          margin-top: 2rem;
          border-radius: var(--borderRadius);
          cursor: pointer;
          transition: var(--transition);
          font-family: var(--fontFamily);
          font-size: 1rem;

          &:hover {
            background-color: var(--primaryColor);
            color: var(--lightColor);
          }
        }
      `}
    >
      <hr />
      <h4>
        Total <span>{total}</span>
      </h4>
      <button onClick={clearCart}>Clear Cart</button>
    </footer>
  )
}

export default Footer
