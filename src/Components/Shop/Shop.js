import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'Lenovo laptop', id: 1},
        {name: 'Dell laptop', id: 2},
        {name: 'Asus laptop', id: 3},
        {name: 'HP laptop', id: 4},
        {name: 'Compack laptop', id: 15}
    ]
    return (
        <div>
            <h2>This is shop</h2>

            {
                products.map(pd => <Product pd={pd} key={pd.id}></Product>)
            }
        </div>
    );
};

export default Shop;