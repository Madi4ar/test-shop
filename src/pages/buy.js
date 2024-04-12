import React from "react";
import { useLocation } from "@reach/router";
import styled from 'styled-components';
import { useState } from "react";
const BuyStyled = styled.div`
    margin:20px 50px;
`
const SelectedProducts = styled.div`
    border:1px solid black;
    padding:20px;
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    & img {
        width:200px;
    }
    & p {
        font-weight:900;
    }
`

const Delete = styled.div`
    background:red;
    color:white;
    padding:10px 20px;
    border-radius:12px;
    font-weight:700;
    cursor:pointer;

`

const Add = styled.div`
    background:green;
    color:white;
    padding:10px 20px;
    border-radius:12px;
    font-weight:700;
    margin-top:20px;
    cursor:pointer;
`
const BuyThings = () => {
    const location = useLocation();
    const initialSelectedProducts = location.state?.selectedProducts || {}; // Проверка на существование selectedProducts и инициализация состояния

    const [selectedProducts, setSelectedProducts] = useState(initialSelectedProducts);

    const handleRemoveProduct = (productId) => {
        const updatedProducts = { ...selectedProducts };
        const currentQuantity = updatedProducts[productId]?.quantity || 0;
        if (currentQuantity > 1) {
            updatedProducts[productId].quantity -= 1;
        } else {
            delete updatedProducts[productId];
        }
        setSelectedProducts(updatedProducts);
    };

    const handleAddMoreProduct = (productId) => {
        setSelectedProducts((prevSelectedProducts) => ({
            ...prevSelectedProducts,
            [productId]: {
                ...prevSelectedProducts[productId],
                quantity: (prevSelectedProducts[productId]?.quantity || 0) + 1,
            },
        }));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        Object.values(selectedProducts).forEach(product => {
            totalPrice += product.price * product.quantity;
        });
        return totalPrice;
    };

  

    console.log(selectedProducts)
    return (
        <BuyStyled> 
        <h1>Selected Products:</h1>
           {Object.keys(selectedProducts).map(productId => (
            <SelectedProducts key={productId}>
                <h2>{selectedProducts[productId].name}</h2>
                <p>Price: ${selectedProducts[productId].price}</p>
                <img src={selectedProducts[productId].image} alt={selectedProducts[productId].name} />
                <p>Quantity: {selectedProducts[productId].quantity}</p>
                <Delete onClick={() => handleRemoveProduct(productId)}>Delete</Delete>
                <Add onClick={() => handleAddMoreProduct(productId)}>Add one more</Add>
            </SelectedProducts>
            ))}
             <h2>Total Price: ${calculateTotalPrice()}</h2>
        </BuyStyled>
    )
}

export default BuyThings;