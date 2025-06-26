function ReachUs() {
  return (
    <div className='reach-us px-4 center column full-w'>
      <div className="about-sec-h2 full-w text-center mb-2 mt-5">Get directions</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7120.544639429203!2d75.85364299999999!3d26.765574000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c1c7f8fffffff%3A0x7ee5a5f5b127bb8d!2sPoornima%20College%20of%20Engineering%20-%20PCE%20%7C%20Best%20College%20for%20Engineering%20in%20Jaipur%20%7C%20NAAC%20A%2B%20Accredited!5e0!3m2!1sen!2sin!4v1750784146533!5m2!1sen!2sin" className='reach-map mt-5' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <p style={{maxWidth: "800px", width: "100%", fontSize: "14px"}} className='mt-4 mb-5 sff'>Feel free to visit us during our working hours. Our office is centrally located, ensuring convenient access from all major areas of the city.</p>
    </div>
  )
}

export default ReachUs
