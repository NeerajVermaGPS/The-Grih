import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import "../../styles/css/hero.css"
import Slider from "./Slider"

function Hero() {
  const { ref: slidingComponent1, className: slidingClass1 } = useInViewAnimation("slide-in-bottom");
  const { ref: slidingComponent2, className: slidingClass2 } = useInViewAnimation("slide-in-right");
  return (
    <section className='full-hw hero center'>
      <video autoPlay={false} muted={true} loop={true} playsInline={true} preload="none" className="full-hw hero-bg" poster="/assets/images/fallback.jpg">
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="full-hw center hero-content">
        <div ref={slidingComponent1} className={`opacity-0 slide-in-bottom-start hero-content-content full-h d-flex justify-content-end column ${slidingClass1}`}>
          <h1 className="tff">Your Dream Home Awaits</h1>
          <p>Discover premium properties, trusted agents, and a stress-free buying or renting experience.</p>
          <a href="#contact" className="common-button">Get Started</a>
        </div>
        <div ref={slidingComponent2} className={`opacity-0 slide-in-right-start theme-sec-gallery ${slidingClass2}`}>
          <Slider />
        </div>
      </div>
    </section>
  )
}

export default Hero
