import React from 'react';

const Product = (props) => {
    return (
        <div style={{border: '1px solid red', marginBottom: '20px', padding: '10px'}}>
            <h5>{props.pd.name}</h5>
            <button> Add to Cart</button>
        </div>
    );
};

export default Product;