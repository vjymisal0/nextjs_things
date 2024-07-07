import Link from 'next/link'
import React from 'react'

const studentlist = () => {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/vijay">Vijay </Link>
                </li>
                <li>
                    <Link href="/studentlist/vaibhav">Vaibhav</Link>
                </li>
                <li>
                    <Link href="/studentlist/shubham">Shubham</Link>
                </li>
                <li>
                    <Link href="/studentlist/sumit">Sumit</Link>
                </li>
            </ul>
        </div>
    )
}

export default studentlist