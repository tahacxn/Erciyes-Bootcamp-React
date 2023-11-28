import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container, Table } from "react-bootstrap";



function ProductDetail() {

    const [detail,setDetail] = useState({})

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
        .then(res =>{
            setDetail(res.data)
        })
    },[ ])


  return (
    <>
    <h1>Product Detail</h1>
    <Container className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Unit Stock</th>
                <th>Go Back</th>
              </tr>
            </thead>
            <tbody>
              <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.name}</td>
              <td>{detail.unitPrice}</td>
              <td>{detail.unitsInStock}</td>
              <td>
                <Link to='/'>Go Back</Link>
                </td>
            </tr>
        </tbody>
          </Table>
        </Container>
    </>
  )
}

export default ProductDetail