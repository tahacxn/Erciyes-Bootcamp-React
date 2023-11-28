import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from "react-bootstrap";
import { Link } from 'react-router-dom'


function ProductPage() {

    const [product, setProduct] = useState([])

    useEffect(()=>{

        axios.get('https://northwind.vercel.app/api/products')
        .then((res) => setProduct(res.data));

    },[]);


    const deleteProduct = async (id) => {

        const isConfirmed = window.confirm('Are you sure you want to delete this product?');

        if (isConfirmed) {

        try {
          
          await axios.delete(`https://northwind.vercel.app/api/products/${id}`);
      
          
          const updatedProducts = product.filter((i) => i.id !== id);
      
          
          setProduct(updatedProducts);
        } catch (error) {
         
          console.error('Error deleting product:', error);
        }
    }
      };

  return (
    <>
    <h3>Total Products: {product.length}</h3>
    <Container className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Unit Stock</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
          {product.map((item) => (
              <tr key={item.id}>
              <td>{item.id}</td>
              <td><Link to={`/products/${item?.id}`}>{item.name}</Link></td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
          </Table>
        </Container>
    </>
  )
}

export default ProductPage