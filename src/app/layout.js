"use client"
import Link from "next/link";
import "./login.css"
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <html lang="en">
      <body>

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