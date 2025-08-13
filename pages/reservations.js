
import { useState } from 'react';

export default function Reservations() {
  const [dateTime, setDateTime] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [includesGuest, setIncludesGuest] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [resp, setResp] = useState(null);

  async function submit() {
    const res = await fetch('/api/reservations/create', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ userEmail, dateTime, partySize, includesGuest })
    });
    const data = await res.json();
    setResp(data);
  }

  async function pay() {
    const total = (partySize * 8000); // $80 per person
    const res = await fetch('/api/checkout', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ purpose:'reservation', amount: total, meta:{ partySize, dateTime } })
    });
    const { url } = await res.json();
    window.location.href = url;
  }

  return (
    <main className="container">
      <div className="card">
        <h2 style={{marginTop:0}}>Make a Reservation</h2>
        <input className="input" placeholder="Your account email" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
        <input className="input" type="datetime-local" value={dateTime} onChange={e=>setDateTime(e.target.value)}/>
        <input className="input" type="number" min="1" value={partySize} onChange={e=>setPartySize(parseInt(e.target.value||'1',10))}/>
        <label><input type="checkbox" checked={includesGuest} onChange={e=>setIncludesGuest(e.target.checked)}/> Include 1 free guest (members only)</label>
        <p>Total: <span className="price">${(partySize*80).toFixed(2)}</span></p>
        <button className="button" onClick={submit}>Save Reservation</button>{' '}
        <button className="button" onClick={pay}>Pay Now</button>
        {resp && <p style={{marginTop:12}}><span className="badge">Saved</span> Reservation ID: {resp.reservation?.id}</p>}
      </div>
    </main>
  );
}
