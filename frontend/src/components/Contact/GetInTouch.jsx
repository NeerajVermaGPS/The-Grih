import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import useForm from "../../hooks/useForm";

const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const validationSchema = {
    name: value => value !== '' ? '' : 'Name is required.',
    email: value => /\S+@\S+\.\S+/.test(value) ? '' : 'Please provide a valid email.',
    message: value => value !== '' ? '' : 'Message is required.'
};

function GetInTouch() {
    const { ref: slidingComponent, className: slidingClass } = useInViewAnimation("slide-in-bottom");
    const { values, errors, handleChange, validate, resetForm } = useForm(initialValues, true, validationSchema);

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', values);
            resetForm();
        }
    };
    return (
        <div ref={slidingComponent} className={`opacity-0 slide-in-bottom-start contacts d-flex full-w justify-content-evenly ${slidingClass}`}>
            <div className="contacts-details column gap-4">
                <div className="d-flex align-items-start">
                    <div className="contacts-details-icon d-flex align-items-start"><img src="/assets/icons/location.svg" alt="" /></div>
                    <div className="contacts-details-content column">
                        <h4>Address</h4>
                        <p>ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
                    </div>
                </div>
                <div className="d-flex align-items-start">
                    <div className="contacts-details-icon d-flex align-items-start"><img src="/assets/icons/phone.svg" alt="" /></div>
                    <div className="contacts-details-content column">
                        <h4>Phone</h4>
                        <a href="tel:+919876543210">+91 9876543210</a>
                        <a href="tel:+916543219870">+91 6543219870</a>
                    </div>
                </div>
                <div className="d-flex align-items-start">
                    <div className="contacts-details-icon d-flex align-items-start"><img src="/assets/icons/time.svg" alt="" /></div>
                    <div className="contacts-details-content column ">
                        <h4>Working Hours</h4>
                        <p>Monday-Friday:<br />09:00 AM - 10:00 PM</p>
                        <p>Saturday-Sunday:<br />09:00 AM - 09:00 PM</p>
                    </div>
                </div>
            </div>
            <div className="contacts-form px-3">
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="cf-user-name">Your name<sup style={{ color: "red", top: "-2px", fontSize: "17px" }}>*</sup></label>
                        <input placeholder="Enter your name" id="cf-user-name" name="name" value={values.name} onChange={handleChange} type="text" required />
                        {errors.name && <div className="invalid-form-data">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="cf-user-email">Email Address<sup style={{ color: "red", top: "-2px", fontSize: "17px" }}>*</sup></label>
                        <input placeholder="Enter you email" id="cf-user-email" name="email" value={values.email} onChange={handleChange} type="email" required />
                        {errors.email && <div className="invalid-form-data">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="cf-user-subject">Subject <small>(Optional)</small></label>
                        <input placeholder="What your mail says?" id="cf-user-subject" name="subject" value={values.subject} onChange={handleChange} type="text" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="cf-user-message">Message<sup style={{ color: "red", top: "-2px", fontSize: "17px" }}>*</sup></label>
                        <textarea rows="3" placeholder="Hi! i’d like to ask about" id="cf-user-message" name="message" value={values.message} onChange={handleChange} required></textarea>
                        {errors.message && <div className="invalid-form-data">{errors.message}</div>}
                    </div>
                    <button type="submit" className="theme-btn common-button rounded-1 sff my-3 filled-btn">Ready to ask?</button></form>
            </div>
        </div>
    )
}

export default GetInTouch
