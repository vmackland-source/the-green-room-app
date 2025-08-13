
import { useState } from 'react';

const MENU = [
  { key:'truffle_fries', name:'Truffle Fries', price:1200, infusible:true },
  { key:'signature_wings', name:'Signature Wings', price:1500, infusible:true },
  { key:'pretzel_bites', name:'Pretzel Bites', price:1000, infusible:true },
  { key:'mozzarella_sticks', name:'Mozzarella Sticks', price:800, infusible:true },
  { key:'dessert', name:'Dessert of the Day (infused)', price:1000, infusible:false }
];

export default function MenuOrder(){
  const [email, setEmail] = useState('');
  const [items, setItems] = useState(MENU.map(m => ({...m, qty:0, infused:false})));

  const updateQty = (i, qty) => {
    const next = [...items];
    next[i].qty = qty;
    setItems(next);
  };
  const toggleInfused = (i, infused) => {
    const next = [...items];
    next[i].infused = infused;
    setItems(next);
  };

  const total = items.reduce((sum, it) => {
    const base = it.price * it.qty;
    const infusion = it.infusible && it.infused ? 500 * it.qty : 0;
    return sum + base + infusion;
  }, 0);

  async function submitOrder(){
    const orderItems = items.filter(i=>i.qty>0).map(i=>({key:i.key, name:i.name, price:i.price, qty:i.qty, infused:i.infused}));
    const res = await fetch('/api/order/create', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ email, items: orderItems })
    });
    const data = await res.json();
    if (data?.order?.id) {
      const checkout = await fetch('/api/checkout', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ purpose:'order', amount: total })
      });
      const { url } = await checkout.json();
      window.location.href = url;
    }
  }

  return (
    <main className="container">
      <div className="card">
        <h2 style={{marginTop:0}}>After Hours Menu</h2>
        <input className="input" placeholder="Your account email" value={email} onChange={e=>setEmail(e.target.value)}/>
        {items.map((it, i)=> (
          <div key={it.key} className="card" style={{marginBottom:12}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <strong>{it.name}</strong> — ${ (it.price/100).toFixed(2) }
                {it.infusible && <small> (add infusion +$5)</small>}
              </div>
              <div>
                Qty: <input className="input" type="number" min="0" style={{width:80, display:'inline-block'}} value={it.qty} onChange={e=>updateQty(i, parseInt(e.target.value||'0',10))}/>
                {it.infusible && (
                  <label style={{marginLeft:12}}>
                    <input type="checkbox" checked={it.infused} onChange={e=>toggleInfused(i, e.target.checked)}/> Infuse
                  </label>
                )}
              </div>
            </div>
          </div>
        ))}
        <p>Total: <span className="price">${(total/100).toFixed(2)}</span></p>
        <button className="button" onClick={submitOrder} disabled={total===0}>Checkout</button>
      </div>
    </main>
  );
}
