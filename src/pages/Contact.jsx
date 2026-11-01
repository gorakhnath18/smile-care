
import { useState } from "react";

import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  Navigation,
  Send,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });

    setSubmitted(false);
  };

  const hospitalAddress =
    "DSNR 11-9-7, 1, New Nagole Main Rd, SBI Colony, Kothapet, Hyderabad, Telangana 500102";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(hospitalAddress);

  const whatsappUrl =
    "https://wa.me/918500003922";

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            Contact <span>Smile Care Dental Hospital</span>
          </h2>

          <p>
            Have questions or need a dental consultation?
            Get in touch with our hospital.
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="contact-info-grid">

          <div className="contact-info-card">
            <div className="contact-icon">
              <MapPin size={25} />
            </div>

            <h3>Our Location</h3>

            <p>
              DSNR 11-9-7, 1, New Nagole Main Road,
              SBI Colony, Kothapet, Hyderabad,
              Telangana 500102.
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
              <Navigation size={15} />
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <Phone size={25} />
            </div>

            <h3>Call Us</h3>

            <p>
              Speak with our hospital team for appointment
              enquiries and general information.
            </p>

            <a href="tel:08500003922">
              085000 03922
              <Phone size={15} />
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <Clock size={25} />
            </div>

            <h3>Opening Hours</h3>

            <p>
              Monday - Saturday: 10 AM - 9 PM
              <br />
              Sunday: 10 AM - 1 PM
            </p>

            <span className="contact-hours-label">
              Weekly schedule
            </span>
          </div>

        </div>

        {/* CONTACT MAIN CONTENT */}
        <div className="contact-main-grid">

          {/* GOOGLE MAP */}
          <div className="contact-map-wrapper">
            <div className="contact-subheading">
              <h3>Find Our Hospital</h3>
              <p>
                Visit Smile Care Dental Hospital, Kothapet.
              </p>
            </div>

            <iframe
              title="Smile Care Dental Hospital Location"
              src="https://maps.google.com/maps?q=Smile%20Care%20Dental%20Hospital%20Kothapet%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-btn"
            >
              <Navigation size={17} />
              Open in Google Maps
            </a>
          </div>

          {/* ENQUIRY FORM */}
          <div className="contact-form-wrapper">
            <div className="contact-subheading">
              <h3>Send Us an Enquiry</h3>
              <p>
                Fill in your details and let us know how
                we can help.
              </p>
            </div>

            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={48} />

                <h3>Thank You!</h3>

                <p>
                  Your enquiry form has been completed.
                  Please call or WhatsApp the hospital
                  to contact the team directly.
                </p>

                <button onClick={resetForm}>
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-group">
                  <label htmlFor="contact-name">
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-phone">
                    Mobile Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select an enquiry type
                    </option>
                    <option value="Appointment Enquiry">
                      Appointment Enquiry
                    </option>
                    <option value="Treatment Enquiry">
                      Treatment Enquiry
                    </option>
                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your message..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Submit Enquiry
                  <Send size={17} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* WHATSAPP CTA */}
        <div className="contact-whatsapp-banner">
          <div className="whatsapp-icon">
            <MessageCircle size={28} />
          </div>

          <div className="whatsapp-content">
            <h3>Need Quick Assistance?</h3>

            <p>
              Contact the hospital directly by phone
              or WhatsApp.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
