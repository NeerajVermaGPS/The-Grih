import { useInViewAnimation } from "../../hooks/useInViewAnimation";

function ServiceCard({title, description, bgImage}) {
  const { ref: slidingComponent, className: slidingClass } = useInViewAnimation("slide-in-bottom");

  return (
    <div ref={slidingComponent} className={`opacity-0 slide-in-bottom-start service-section-card center column ${slidingClass}`}>
      <div className="full-hw service-section-card-front center column gap-3">
        <h3 className="service-section-title sff mb-2">{title}</h3>
        <p className="service-section-desc">{description}</p>
      </div>
      <div className="full-hw service-section-card-back">
        <img src={bgImage} alt="service" className="full-hw" />
      </div>
    </div>
  )
}

export default ServiceCard
