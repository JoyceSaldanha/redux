import React from 'react'
import Products from '../components/Products'

export default function Home() {
  return (
    <div>
        <h2 className='heading'>Welcome to the Redux toolkit store</h2>
        <section>
            <h3>Products</h3>
            <Products></Products>
        </section>
    </div>
  )
}
