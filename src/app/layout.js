"use client"
import Link from "next/link";
  import "./globals.css"
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <html lang="en">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/> */}
      <body suppressHydrationWarning={true}>

        <ul className="login-menu">
          <li>
            <h4>Login navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/about">About Main</Link>
          </li>
          <li>
            <Link href="/about/aboutclg">About Clg</Link>
          </li>
        </ul>

        {children}
      </body>
    </html>
  )
}