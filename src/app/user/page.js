"use client"
import Script from 'next/script';
const user = () => {
    return (
        <div>

            <Script src='/location.js' onLoad={() => {
                console.log("file loaded")
            }} />
        </div>
    )
}

export default user


// export function generateMetadata({ params }) {
//     return {
//         title: "user page title",
//         description: "its user page description"
//     }
// }