export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>Welcome to <span style={{color:'#d7b36a'}}>The Green Room</span></h1>
        <p>Five-course, chef-driven experiences with optional cannabis infusion.*</p>

        <div className="grid grid-3">
          <div className="card">
            <h3>Membership <span className="badge">$60/year</span></h3>
            <p>Perks: <strong>$10 entry</strong> after-hours, <strong>$10 off</strong> café visits.</p>
            <a className="button" href="/membership">Become a member</</a>
          </div>

          <div className="card">
            <h3>Café Reservations <span className="badge">$80/person</span></h3>
            <p>Reserve your seat for a 5-course themed tasting. RSVP only.</p>
            <a className="button" href="/reservations">Book now</a>
          </div>

          <div className="card">
            <h3>After Hours</h3>
            <p>Entry: <strong>$20</strong> non-member, <strong>$10</strong> member. Limited menu available.</p>
            <a className="button" href="/after-hours">Get entry</a>
          </div>
        </div>

        <hr/>
        <small>*Follow local laws and age requirements.</small>
      </div>
    </main>
  );
}
