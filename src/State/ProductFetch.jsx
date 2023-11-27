import React, { useState } from 'react'
import { Container, Table } from "react-bootstrap";
import { productsData } from '../data/productsData';
function ProductFetch() {

    const [products, setProducts] = useState(productsData)

    const showAll= () => {
        setProducts(productsData)
    }
    const critic= () => {
        setProducts(productsData.filter((item) => item.unitsInStock < 5))
    }
    const cheap= () => {
        setProducts(productsData.filter((item) => item.unitPrice < 15))
    }
    const expensive= () => {
        setProducts(productsData.filter((item) => item.unitPrice > 30))
    }


    return (
<>
<div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-6 mb-2">
          <button onClick={showAll} className="btn btn-primary btn-block">Show All</button>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <button onClick={critic} className="btn btn-warning btn-block">Show Critic Stock</button>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <button onClick={cheap} className="btn btn-success btn-block">Show Cheap</button>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <button onClick={expensive} className="btn btn-danger btn-block">Show Expensive</button>
        </div>
      </div>
    </div>

        <Container className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Unit Stock</th>
              </tr>
            </thead>
            <tbody>
          {products.map((item) => (
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
          </Table>
        </Container>
          </>
      );
}

export default ProductFetch