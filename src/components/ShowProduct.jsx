import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, productSelectors } from '../features/productSlice'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const ShowProduct = () => {
  // const { title, price } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const products = useSelector(productSelectors.selectAll)

  const navigate = useNavigate()

  console.log('ini show', products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  const handleDelete = (id) => {
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to delete this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!',
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
     }
   })
  }

  return (
    <div className='box mt-5'>
      <table class='table is-triped is-fullwidth'>
        <thead>
          <tr>
            <th>Product No</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => handleEdit(product.id)}
                  className='button is-info is-light is-small m-1'
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(product.id)}className='button is-danger is-light is-small m-1'>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowProduct
