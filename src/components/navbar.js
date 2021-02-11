import React from 'react'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { amount } = useGlobalContext()
  console.log(amount)
  return <div>navbar</div>
}

export default Navbar
