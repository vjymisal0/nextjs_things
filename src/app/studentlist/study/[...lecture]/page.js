"use client"
import React from 'react'

const lecture = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>
                {params.lecture[0]}
            </h1>

        </div>
    )
}

export default lecture