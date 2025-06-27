import axios from 'axios';
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!email) {
      setStatus({ type: 'error', message: 'Email is required' });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`https://thegrih.onrender.com/newsletter/subscribe/`, { email });
      setStatus({ type: 'success', message: res.data.message });
      setEmail('');
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || 'Something went wrong';
      setStatus({ type: 'error', message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className='full-w footer column'>
      <div className="footer-top d-flex flex-wrap">
        <div className='footer-top-div column footer-top-div1'>
            <div className='logo-ctnr center justify-content-start'>
              <img src="/assets/icons/logos/logo.png" alt="logo" />
              <span>The Grih</span>
            </div>
            <p>ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
        </div>
        <div className='footer-top-div column footer-top-div2'>
            <h6>Links</h6>
            <div className='column'>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Why Choose Us</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className='footer-top-div column footer-top-div3'>
            <h6>Help</h6>
            <div className='column'>
                <a href="#">Payment Options</a>
                <a href="#">Property Listings</a>
                <a href="#">Privacy Policies</a>
            </div>
        </div>
        <div className='footer-top-div column footer-top-div4'>
            <h6>Newsletter</h6>
            <div className='column'>
                <form onSubmit={handleSubmit} className={loading ? "submitting-form" : ""}>
                    <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <button type='submit' className='center' disabled={loading}>{loading && <img src="/assets/icons/loader.gif" alt="loading" style={{marginRight: "5px", height: "18px"}} />}{loading ? 'Subscribing...' : 'Subscribe'}</button>
                </form>
                {status.message && (
                  <div class="d-flex align-items-center mt-2 fadein-effect">
                    <img src={`/assets/icons/${status.type}.svg`} style={{width: "15px", marginRight: "5px"}} alt={status.type} /><p className={`nl-message nl-${status.type} m-0`}>{status.message}</p>
                  </div>
                )}
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        &#169; The Grih. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer