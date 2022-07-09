import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
// import { update } from '../features/productSlice'

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  // const dispatch = useDispatch()

  const editProduct = (e) => {
    e.preventDefault()
    // dispatch(update({ title, price }))
  }

  const handleSave = (e) => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <form className='box mt-5' onSubmit={editProduct}>
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
