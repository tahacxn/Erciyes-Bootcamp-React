import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData";
import { Container, Table } from "react-bootstrap";

function ProductsPage() {
  const { id } = useParams();
  const productId = parseInt(id, 10); // Convert id to a number

  var product = productsData.find((q) => q.id === productId);

  return (
    <Container className="mt-4">
      <h2>Product Information</h2>
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
          <tr>
            <td>{productId}</td>
            <td>{product?.name}</td>
            <td>{product?.unitPrice}</td>
            <td>{product?.unitsInStock}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductsPage;
