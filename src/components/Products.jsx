import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

export default function Products() {
    const dispatch = useDispatch();

    const {data: products, status} = useSelector((state) => state.product)

    // const [products,setProducts] = useState([]);

    useEffect(() => {
        // const fetchProducts = async () => {
        //  await fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((res) => setProducts(res))
        // }

        // fetchProducts();
        dispatch(fetchProducts());
    },[])

    const handleAdd = (product) => {
        //store product in redux store
        dispatch(add(product));
    }

    if(status === STATUSES.LOADING) {
        return <h2>Loading....</h2>
    }

    if(status === STATUSES.ERROR) {
        return <h2>Something went wrong....</h2>
    }

  return (
    <div className='productsWrapper'>
        {
            products.map((product,i) => {
                return(
                    <div className='card' key={i}>
                        <img src={product.image} alt='no'></img>
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                )
            })
        }
    </div>
  )
}
