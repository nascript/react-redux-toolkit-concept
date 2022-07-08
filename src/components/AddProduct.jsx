import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../features/productSlice'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  const updateProduct = (e) => {
    e.preventDefault()
    dispatch(update({ title, price }))
  }

  return (
    <form className='box mt-5' onSubmit={updateProduct}>
      <div className='field'>
        <div className='label'>Title</div>
        <div className='control'>
          <input
            type='text'
            className='input'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className='field'>
        <div className='label'>Price</div>
        <div className='control'>
          <input
            type='number'
            className='input'
            placeholder='Proce'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className='field'>
        <button className='button is-success'>Submit</button>
      </div>
    </form>
  )
}

export default AddProduct
