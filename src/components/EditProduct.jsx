import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct } from '../features/productSlice'

// import { update } from '../features/productSlice'

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  console.log('params', params)
  const id = params.id
  // const dispatch = useDispatch()

  const handleSave = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        await dispatch(editProduct({ title, price, id }))
        navigate('/')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <form className='box mt-5' onSubmit={handleSave}>
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
        <button onClick={() => handleSave()} className='button is-success'>
          Update
        </button>
      </div>
    </form>
  )
}

export default EditProduct
