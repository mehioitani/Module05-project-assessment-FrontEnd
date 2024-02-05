import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/authContext.jsx";
import axios from "axios";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const OrderPage = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/orders`
          );
          setOrders(response.data.data);
          console.log(response.data.data)
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <Container>
      <Title>Your Orders</Title>
      {user ? (
        <OrderList>
          {orders.map((order) => (
            <OrderItem key={order._id}>
              {/* <span>{order.products.title}</span> */}
              {/* <span>${order.product.price.toFixed(2)}</span> */}
            </OrderItem>
          ))}
        </OrderList>
      ) : (
        <p>Please login to view your orders.</p>
      )}
    </Container>
  );
};

export default OrderPage;
