import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState } from 'react'
import AddProductForm from '../components/forms/AddProduct'
import EditProductForm from '../components/forms/EditProduct'
import ProductTable from '../components/tables/ProductTable'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  // Sample Data
  const productsData = [
    { id: 1, name: 'Zaprqn', price: '121', address: 'Sofia', email: 'uhb475@abv.bg', phone: '0881843113' },
    { id: 2, name: 'Ognqn', price: '222', address: 'Plovdiv', email: 'enzure1@abv.bg', phone: '0321818100' },
    { id: 3, name: 'Teodor', price: '345', address: 'Varna', email: 'aaaaa5@abv.bg', phone: '0881818199' },
  ]

  //default values
  const initialFormState = { id: '', name: '', price: '', address: '', email: '', phone: '' }

  // states
  const [products, setProducts] = useState(productsData)
  const [currentProduct, setCurrentProduct] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addProduct = product => {
    product.id = products.length + 1
    // Check if exists
    if (products.some(products => products.name === product.name)) {
      console.log('exists')
    }
    else {
      //if exists add to existing array
      setProducts([...products, product])
      console.log(product)
    }
  }

  const deleteProduct = id => {
    setEditing(false)
    //display all except deleted product
    setProducts(products.filter(product => product.id !== id))
  }

  const updateProduct = (id, updatedProduct) => {
    setEditing(false)

    setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
  }

  const editRow = product => {
    setEditing(true)

    setCurrentProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      address: product.address,
      email: product.email,
      phone: product.phone
    })
  }

  return (
    <div className="container-fluid text-center p-5" style={{ background: '#dbeaaa', minHeight: '100vh' }}>
      {/* <h2>Table</h2> */}
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h5>Edit product</h5>
              <EditProductForm
                editing={editing}
                setEditing={setEditing}
                currentProduct={currentProduct}
                updateProduct={updateProduct}
              />
            </>
          ) : (
            <>
              <h5>Add product</h5>
              <AddProductForm addProduct={addProduct} />
            </>
          )}
        </div>
        <div className="pt-5 flex-large">
          <h3>Products list</h3>
          <ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
        </div>
      </div>
    </div>
  )
}
