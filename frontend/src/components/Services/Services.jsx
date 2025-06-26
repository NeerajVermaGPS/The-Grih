import '../../styles/css/services.css';
import ServiceCard from './ServiceCard';

const services = [
  {
    Icon: "/assets/icons/home.svg",
    title: 'Buy a Home',
    description:
      'Explore thousands of verified listings to find the perfect home that fits your budget and lifestyle.',
  },
  {
    Icon: "/assets/icons/key.svg",
    title: 'Sell a Property',
    description:
      'List your property with us and get it seen by thousands of active buyers with expert guidance.',
  },
  {
    Icon: "/assets/icons/dollar.svg",
    title: 'Rent a Home',
    description:
      'From luxury apartments to affordable rentals, we help you find a comfortable place to live.',
  },
  {
    Icon: "/assets/icons/settings.svg",
    title: 'Property Management',
    description:
      'Let our team manage, maintain, and market your rental property to maximize returns.',
  },
];

export default function Services() {
  return (
    <section id="services" className="service-section">
      <h2 className="about-sec-h2 full-w text-center">Our Services</h2>
      <div className="service-section-grid center">
        {services.map(({ Icon, title, description }) => (
          <ServiceCard key={title} Icon={Icon} title={title} description={description}/>
        ))}
      </div>
    </section>
  );
}