import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  width: 200px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h3`
  color: #333;
`;

const Price = styled.p`
  color: #777;
  margin-top: 8px;
`;

const Description = styled.p`
  color: #555;
  margin-top: 8px;
`;

const ProductCard = ({ product }) => {
  console.log("the image:",product.image);  
  return (
    <Card>
      <Image src={`http://localhost:5000/${product.image}`} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Description>{product.description}</Description>
    </Card>
  );
};

export default ProductCard;
