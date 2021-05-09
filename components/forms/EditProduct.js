import React, { useState, useEffect } from 'react'
import { FormControl, FormHelperText, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const EditProductForm = props => {
  const [product, setProduct] = useState(props.currentProduct)

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  //if click on multiple times to edit products
  useEffect(
    () => {
      setProduct(props.currentProduct)
    },
    [props]
  )

  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateProduct(product.id, product)
  }

  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
    >
      <FormControl>
        <TextValidator
          label="Name"
          onChange={handleInputChange}
          name="name"
          type="text"
          validators={['required']}
          errorMessages={['this field is required']}
          value={product.name}
        />
        <FormHelperText id="my-helper-text">Fill your name.</FormHelperText>
      </FormControl>
      <FormControl>
        <TextValidator
          label="Price"
          onChange={handleInputChange}
          name="price"
          type="number"
          validators={['required']}
          errorMessages={['this field is required']}
          value={product.price}
        />
        <FormHelperText id="my-helper-text">Product price.</FormHelperText>
      </FormControl>
      <FormControl>
        <TextValidator
          label="Address"
          onChange={handleInputChange}
          name="address"
          type="text"
          validators={['required']}
          errorMessages={['this field is required']}
          value={product.address}
        />
        <FormHelperText id="my-helper-text">Address info</FormHelperText>
      </FormControl>
      <FormControl>
        <TextValidator
          label="Email"
          onChange={handleInputChange}
          name="email"
          type="email"
          validators={['required']}
          errorMessages={['this field is required']}
          value={product.email}
        />
        <FormHelperText id="my-helper-text">Email address.</FormHelperText>
      </FormControl>
      <FormControl>
        <TextValidator
          label="Phone"
          onChange={handleInputChange}
          name="phone"
          type="number"
          validators={['required']}
          errorMessages={['this field is required']}
          value={product.phone}
        />
        <FormHelperText id="my-helper-text">Phone number.</FormHelperText>
      </FormControl>
      <Button type="submit" variant="contained">Add new product</Button>
    </ValidatorForm>
  )
}

export default EditProductForm
