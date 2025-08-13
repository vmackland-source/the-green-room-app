
export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>Welcome to <span className="brand">The Green Room</span></h1>
        <p>Five-course, chef-driven experiences with optional cannabis infusion.*</p>
        <div className="grid grid-3">
          <div className="card">
            <h3>Membership <span className="badge">$60/year</span></h3>
            <p>Member perks: $10 entry, $10 off café visits, and 1 free guest per visit.</p>
            <a className="button" href="/membership">Become a member</a>
          </div>
          <div className="card">
            <h3>Reservations <span className="badge">$80/person</span></h3>
            <p>Reserve your seat for a 5-course themed tasting. Add infusion (+$5 per infused item where applicable).</p>
            <a className="button" href="/reservations">Book now</a>
          </div>
          <div className="card">
            <h3>After Hours Menu</h3>
            <ul>
              <li>Truffle Fries – $12</li>
              <li>Signature Wings – $15</li>
              <li>Pretzel Bites – $10</li>
              <li>Mozzarella Sticks – $8</li>
              <li>Dessert of the Day – $10 (infused)</li>
            </ul>
            <a className="button" href="/menu">Order food</a>
          </div>
        </div>
        <hr/>
        <small>*Comply with all local laws and age requirements. Infusion options visible only where legally permitted.</small>
      </div>
    </main>
  );
}
