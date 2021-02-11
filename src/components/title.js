/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const Title = () => {
  return (
    <div
      css={css`
        margin: 5vh auto 0;
        text-align: center;

        h1 {
          border-bottom: 1px dotted var(--secondaryColor);
          width: 25%;
          margin: 0 auto 2rem;
        }
      `}
    >
      <h1>Your Cart</h1>
    </div>
  )
}

export default Title
