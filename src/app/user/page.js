import React from 'react'
const user = () => {
    return (
        <div>
            <h1>Hello this is user page</h1>
        </div>
    )
}

export default user


export function generateMetadata({ params }) {
    return {
        title: "user page title",
        description: "its user page description"
    }
}