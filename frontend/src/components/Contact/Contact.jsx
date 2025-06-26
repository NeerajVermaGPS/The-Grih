import Navbar from "../Header/Navbar"
import Footer from "../Footer/Footer"
import GetInTouch from "./GetInTouch"
import ReachUs from "./ReachUs"
import "../../styles/css/contacts.css"
function Contact() {
  return (
    <>
      <div className="about-sec-h2 full-w text-center p-3 px-sm-5 mb-0 mt-5">Get in touch with us</div>
      <p className="text-center p-4 px-sm-5 pt-0" style={{maxWidth: "700px", margin: "0 auto", lineHeight: "26px", fontSize: "15px"}}>For more information about our <strong>Product & Services</strong>, please feel free to <strong>drop us an email</strong>. Our staff always be there to help you out. Do not hesitate!</p>
      <GetInTouch />
      <ReachUs />
    </>
  )
}

export default Contact
