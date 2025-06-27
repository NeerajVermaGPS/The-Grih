import '../../styles/css/services.css';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Buy a Home',
    bgImage: "/assets/images/ser1.png",
    description:
      'Explore thousands of verified listings to find the perfect home that fits your budget and lifestyle.',
  },
  {
    title: 'Sell a Property',
    bgImage: "/assets/images/ser2.png",
    description:
      'List your property with us and get it seen by thousands of active buyers with expert guidance.',
  },
  {
    title: 'Rent a Home',
    bgImage: "/assets/images/ser3.png",
    description:
      'From luxury apartments to affordable rentals, we help you find a comfortable place to live.',
  },
  {
    title: 'Property Management',
    bgImage: "/assets/images/ser4.png",
    description:
      'Let our team manage, maintain, and market your rental property to maximize returns.',
  },
];

export default function Services() {
  return (
    <section id="services" className="service-section">
      <h2 className="about-sec-h2 full-w text-center mb-3">Our Services</h2>
      <p className='mb-5 px-3 text-center' style={{maxWidth: "700px", margin: "auto"}}>Discover a wide range of real estate services tailored to help you buy, sell, rent, or manage properties with ease and confidence.</p>
      <div className="service-section-grid center">
        {services.map(({ title, description, bgImage }) => (
          <ServiceCard key={title} title={title} description={description} bgImage={bgImage}/>
        ))}
      </div>
    </section>
  );
}