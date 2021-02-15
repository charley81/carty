/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CartContainer from './cart-container'
import Navbar from './navbar'
import { useGlobalContext } from '../context'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <h1
        className="loading"
        css={css`
          text-align: center;
          margin-top: 5rem;
        `}
      >
        Loading
      </h1>
    )
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  )
}

export default App
