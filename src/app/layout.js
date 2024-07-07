import Link from "next/link";
import "./login.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <ul className="login-menu">
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