import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice';

export default function CartCart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart)

  const removeProduct = (productId) => {
    dispatch(remove(productId));
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((product,i) => {
            return(
              <div className='cartCard' key={i}>
                <img src={product.image} alt='no' />
                <h5>{product.title}</h5>
                <h4>{product.price}</h4>
                <button className='btn' onClick={() => removeProduct(product.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
