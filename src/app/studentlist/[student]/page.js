"use client"
import React from 'react'

const studentsdetails = ({ params }) => {
    console.log(params)
    return (
        <div>

            <h1>Student Details</h1>
            <h2>Name: {params.student}</h2>

        </div>
    )
}

export default studentsdetails