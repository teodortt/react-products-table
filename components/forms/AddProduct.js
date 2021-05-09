import React, { useState } from 'react'
import { FormControl, FormHelperText, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const AddProductForm = props => {
	const initialFormState = { id: null, name: '', price: '', address: '', email: '', phone: '' }
	const [product, setProduct] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		//prevent submit if is have empty field 
		// if (!product.name || !product.price || !product.address || !product.email || !product.phone) {
		// 	alert('Please fill all fields!')
		// }

		props.addProduct(product)
		setProduct(initialFormState)
	}

	return (
		<>
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
					<FormHelperText id="my-helper-text">Address info.</FormHelperText>
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
		</>
	)
}

export default AddProductForm
