import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useState } from "react"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import styled from 'styled-components';
import { PRODUCTS } from "../data/products";

const IndexPage = () => {
  const ProductsWrapper = styled.div`
    border:1px solid black;
    margin-top:20px;
    display:flex;
    align-items:flex-start;
    width:30%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:20px;
    padding-bottom:20px;
    margin-left:30px;
    
    @media (max-width: 1024px) {
      width: 100%;
    }
  

    & div {
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

    }

    & button {
      background:#003333;
      padding:10px 30px;
      color:white;
      outline:none;
      border:none;
      cursor:pointer;
    }
  `;

  const ProductsWrap = styled.div`
    display:flex;
    flex-wrap:wrap;

    & img {
      width:300px;
      height:300px;
      object-fit:cover; 
    }
  `;

  const [selectedProducts, setSelectedProducts] = useState({});

  const handleBuyProduct = (productId, productInfo) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [productId]: {
        ...productInfo,
        quantity: (prevSelectedProducts[productId]?.quantity || 0) + 1,
      },
    }));
  };

  return (
    <Layout selectedProducts={selectedProducts}>
      <ProductsWrap>
        {PRODUCTS.map(product => (
          <ProductsWrapper key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h1>{product.name}</h1>
              <p>${product.price}</p>
              <button onClick={() => handleBuyProduct(product.id, product)}>Buy</button>
              <span>{selectedProducts[product.id]?.quantity || null}</span>
            </div>
          </ProductsWrapper>
        ))}
      </ProductsWrap>
    </Layout>
  )
}

export default IndexPage;
