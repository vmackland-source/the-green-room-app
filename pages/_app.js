
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <div className="brand">THE GREEN ROOM</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/membership">Membership</a>
          <a href="/reservations">Reservations</a>
          <a href="/menu">Order</a>
          <a href="/profile">Profile</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}
