"use client"
import React, { useState, useEffect } from 'react'
export default function page() {
    const [product, setProduct] = useState([])
    const fetchProduct = async () => {
        let data = await fetch('https://dummyjson.com/products')
        let response = await data.json()
        setProduct(response)
        console.log(response)
    }
    // useEffect(() => {
    //     fetchProduct()
    // }, [])
    useEffect(() => {
        console.log(product)

    }, [product])

    return (
        <div>
            <h1>Product List</h1>
            <p>Fetch Data with API in client component</p>
            {product?.map((item) => {
                <h3>Name: {item.title}</h3>
            }
            )}
        </div>
    )
}
