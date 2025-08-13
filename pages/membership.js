
import { useState } from 'react';

export default function Membership() {
  const [form, setForm] = useState({
    fullName:'', email:'', phone:'', address:'', preferredContact:'email',
    allergies:'', heardAbout:'', whyJoin:'', cannabisPreference:'hybrid', photoUrl:''
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit() {
    setSubmitting(true);
    setResult(null);
    const res = await fetch('/api/membership/apply', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setSubmitting(false);
    setResult(data);
  }

  async function payMembership() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ purpose:'membership', amount:6000 })
    });
    const { url } = await res.json();
    window.location.href = url;
  }

  return (
    <main className="container">
      <div className="card">
        <h2 style={{marginTop:0}}>Membership Application</h2>
        <div className="grid grid-2">
          <input className="input" name="fullName" placeholder="Full name" onChange={onChange}/>
          <input className="input" name="address" placeholder="Address" onChange={onChange}/>
          <input className="input" name="email" placeholder="Email" onChange={onChange}/>
          <input className="input" name="phone" placeholder="Phone" onChange={onChange}/>
          <select className="select" name="preferredContact" onChange={onChange} defaultValue="email">
            <option value="email">Preferred contact: Email</option>
            <option value="phone">Preferred contact: Phone</option>
          </select>
          <select className="select" name="cannabisPreference" onChange={onChange} defaultValue="hybrid">
            <option value="indica">Indica</option>
            <option value="sativa">Sativa</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <input className="input" name="heardAbout" placeholder="How did you hear about us?" onChange={onChange}/>
          <input className="input" name="photoUrl" placeholder="Link to your photo (required)" onChange={onChange}/>
          <textarea className="textarea" name="whyJoin" placeholder="Why do you want to join The Green Room?" onChange={onChange}/>
          <textarea className="textarea" name="allergies" placeholder="Food allergies" onChange={onChange}/>
        </div>
        <button className="button" onClick={submit} disabled={submitting}>Submit Application</button>
        {' '}
        <button className="button" onClick={payMembership}>Pay $60 Membership</button>
        {result && <p style={{marginTop:12}}><span className="badge">Submitted</span> Application ID: {result.user?.id || '—'}</p>}
      </div>
    </main>
  );
}
