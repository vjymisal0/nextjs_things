"use client"

import React, { useState, useEffect } from 'react'

export default function page() {
    const [products, setProducts] = useState([])
    const fetchProduct = async () => {
        let data = await fetch('https://dummyjson.com/products')
        let response = await data.json()
        setProducts(response.products)
        console.log(response.products)
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    // useEffect(() => {
    //     console.log(products)
    // }, [products])

    return (
        <div>
            <h1>Product List</h1>
            <p>Fetch Data with API in client component</p>
            {products.map((item) => (
                <h3 key={item.id}>Name: {item.title}</h3>
            ))}
        </div>
    )
}


// "use client"
// import React, { useState, useEffect } from 'react';

// export default function Page() {
//     const [products, setProducts] = useState([]);

//     const fetchProduct = async () => {
//         let data = await fetch('https://dummyjson.com/products');
//         let response = await data.json();
//         setProducts(response.products); // Corrected this line
//         console.log(response);
//     };

//     useEffect(() => {
//         fetchProduct();
//     }, []);

//     useEffect(() => {
//         console.log(products);
//     }, [products]);

//     return (
//         <div>
//             <h1>Product List</h1>
//             <p>Fetch Data with API in client component</p>
//             {products.map((item) => (
//                 <h3 key={item.id}>Name: {item.title}</h3> // Added key and corrected the map function
//             ))}
//         </div>
//     );
// }
