import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // padding: 500
  },
});


const ProductTable = props => {

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="mb-5">



      <Table className={classes.table} aria-label="simple table">
        <TableHead className="bg-success">
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="center">Product Price</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone number</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.length > 0 ? (
            props.products.map(product => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">{product.name}</TableCell>
                <TableCell align="center">${product.price}</TableCell>
                <TableCell align="center">{product.address}</TableCell>
                <TableCell align="center">{product.email}</TableCell>
                <TableCell align="center">{product.phone}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      props.editRow(product)
                    }}
                    className="button muted-button"
                  >
                    Edit
              </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => props.deleteProduct(product.id)}
                    className="button muted-button"
                  >
                    Delete
              </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No products</td>
            </tr>
          )}
        </TableBody>
      </Table>
    </TableContainer>

  )
}
export default ProductTable
