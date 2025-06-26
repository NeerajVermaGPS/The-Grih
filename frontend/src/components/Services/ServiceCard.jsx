import { useInViewAnimation } from "../../hooks/useInViewAnimation";

function ServiceCard({Icon, title, description}) {
  const { ref: slidingComponent, className: slidingClass } = useInViewAnimation("slide-in-bottom");

  return (
    <div ref={slidingComponent} className={`opacity-0 slide-in-bottom-start service-section-card center column ${slidingClass}`}>
      <img src={Icon} alt="service" className='mb-3' style={{height: "48px"}} />
      <h3 className="service-section-title sff mb-2">{title}</h3>
      <p className="service-section-desc">{description}</p>
    </div>
  )
}

export default ServiceCard
