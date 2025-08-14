import '../styles/globals.css'
import Image from 'next/image'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <div className="brand">
          <Image src="/logo.png" alt="The Green Room" width={36} height={36} priority />
          <span>THE GREEN ROOM</span>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/membership">Membership</a>
          <a href="/reservations">Café Reservations</a>
          <a href="/after-hours">After Hours Entry</a>
          <a href="/menu">Order</a>
          <a href="/profile">Profile</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}
