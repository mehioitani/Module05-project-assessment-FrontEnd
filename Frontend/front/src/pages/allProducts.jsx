import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/productCard.jsx";
import axios from "axios";
import { useAuthContext } from "../context/authContext.jsx";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AuthButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data.data);
    };
    fetchProducts();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

  const handleProductClick = (productId) => {
    if (user) {
      // If user is logged in, navigate to the checkout page with the selected product ID
      navigate.push(`/checkout/${productId}`);
    } else {
      // If user is not logged in, redirect to login page
      navigate.push("/login");
    }
  };

  return (
    <Container>
      <Title>Available Products</Title>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onClick={() => handleProductClick(product._id)}
          />
        ))}
      </ProductList>
      {!user && (
        <>
          <AuthButtons>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </AuthButtons>
          <p>Please login or register to pick a product.</p>
        </>
      )}
    </Container>
  );
};

export default ProductListPage;
