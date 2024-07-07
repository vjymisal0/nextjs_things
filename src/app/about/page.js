import Link from "next/link";
import React from "react";

const about = () => {
    return (
        <div>
            <h1>About</h1>
            <br />
            <Link href="/">Go to Home page</Link>
            <br />
            <Link href="/about/aboutclg">Go to about clg page</Link>
        </div>
    )
}

export default about;