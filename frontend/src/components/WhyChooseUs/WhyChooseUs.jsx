import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import "../../styles/css/wju.css"

function WhyChooseUs() {
  const { ref: slidingComponent1, className: slidingClass1 } = useInViewAnimation("slide-in-left");
  const { ref: slidingComponent2, className: slidingClass2 } = useInViewAnimation("slide-in-right");
  return (
    <div className='center full-w wju'>
      <div ref={slidingComponent1} className={`opacity-0 slide-in-left-start wju-content ${slidingClass1}`}>
        <h2 className="about-sec-h2">Why Choose Us?</h2>
        <ul className='column gap-4'>
          <li>
            <img src="/assets/icons/values/exp.svg" alt="value" />
            <div>
              <div className='wju-header'>15+ Years of Experience</div>
              <div className='wju-desc'>We’ve helped over 10,000 families find their dream homes across the country.</div>
            </div>
          </li>
          <li>
            <img src="/assets/icons/values/reliability.svg" alt="value" />
            <div>
              <div className='wju-header'>Verified Listings</div>
              <div className='wju-desc'>Every property is thoroughly checked and verified to ensure accuracy and trust.</div>
            </div>
          </li>
          <li>
            <img src="/assets/icons/values/local-exp.svg" alt="value"/>
            <div>
              <div className='wju-header'>Local Expertise</div>
              <div className='wju-desc'>Our agents know your neighborhood - we help you make informed decisions quickly.</div>
            </div>
          </li>
          <li>
            <img src="/assets/icons/values/e2e-support.svg" alt="value" />
            <div>
              <div className='wju-header'>End-to-End Support</div>
              <div className='wju-desc'>From loan assistance to paperwork, our team guides you every step of the way.</div>
            </div>
          </li>
        </ul>
      </div>
      <div ref={slidingComponent2} className={`opacity-0 slide-in-right-start wju-image ${slidingClass2}`}>
        <img src="/assets/images/why-join-us.jpeg" alt="why-join-us" className='full-hw' />
      </div>
    </div>
  )
}

export default WhyChooseUs