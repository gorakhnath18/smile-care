
import { useState } from "react";
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  Send,
} from "lucide-react";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      treatment: "",
      date: "",
      time: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <section className="appointment-section" id="appointment">
        <div className="container">

          <div className="success-card">
            <CheckCircle size={65} />

            <h2>Thank You, {formData.name}!</h2>

            <p>
              Your appointment request has been submitted in this demo.
              Please contact the hospital to confirm availability.
            </p>

            <div className="booking-summary">
              <p>
                <strong>Treatment:</strong> {formData.treatment}
              </p>

              <p>
                <strong>Date:</strong> {formData.date}
              </p>

              <p>
                <strong>Time:</strong> {formData.time}
              </p>

              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
            </div>

            <button
              type="button"
              className="btn-primary"
              onClick={resetForm}
            >
              Book Another Appointment
            </button>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="appointment-section" id="appointment">
      <div className="container appointment-grid">

        {/* LEFT INFORMATION */}
        <div className="appointment-info">

          <span className="section-tag">
            ONLINE APPOINTMENT
          </span>

          <h2>
            Schedule Your Visit.
            <span> Smile With Confidence.</span>
          </h2>

          <p>
            Take the first step towards better oral health.
            Fill out the appointment request form and contact
            our hospital to confirm your preferred slot.
          </p>

          <div className="appointment-detail">
            <div className="detail-icon">
              <Phone />
            </div>

            <div>
              <strong>Call Our Hospital</strong>
              <a href="tel:08500003922">085000 03922</a>
            </div>
          </div>

          <div className="appointment-detail">
            <div className="detail-icon">
              <Clock />
            </div>

            <div>
              <strong>Working Hours</strong>
              <span>Mon–Sat: 10 AM – 9 PM</span>
              <span>Sunday: 10 AM – 1 PM</span>
            </div>
          </div>

        </div>

        {/* BOOKING FORM */}
        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >
          <h3>Book An Appointment</h3>

          <p>Enter your details below.</p>

          <div className="form-grid">

            {/* PATIENT NAME */}
            <div className="form-group">
              <label htmlFor="patient-name">
                Full Name *
              </label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  id="patient-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  required
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label htmlFor="patient-phone">
                Phone Number *
              </label>

              <div className="input-wrapper">
                <Phone size={18} />

                <input
                  id="patient-phone"
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-group full-width">
              <label htmlFor="patient-email">
                Email Address
              </label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  id="patient-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* TREATMENT */}
            <div className="form-group full-width">
              <label htmlFor="treatment">
                Select Treatment *
              </label>

              <select
                id="treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
              >
                <option value="">Choose a treatment</option>
                <option value="General Dental Checkup">
                  General Dental Checkup
                </option>
                <option value="Root Canal Treatment">
                  Root Canal Treatment
                </option>
                <option value="Dental Implants">
                  Dental Implants
                </option>
                <option value="Braces & Aligners">
                  Braces & Aligners
                </option>
                <option value="Pediatric Dentistry">
                  Pediatric Dentistry
                </option>
                <option value="Cosmetic Dentistry">
                  Cosmetic Dentistry
                </option>
                <option value="Gum Treatment">
                  Gum Treatment
                </option>
                <option value="Teeth Whitening">
                  Teeth Whitening
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* DATE */}
            <div className="form-group">
              <label htmlFor="appointment-date">
                Preferred Date *
              </label>

              <div className="input-wrapper">
                <CalendarDays size={18} />

                <input
                  id="appointment-date"
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* TIME */}
            <div className="form-group">
              <label htmlFor="appointment-time">
                Preferred Time *
              </label>

              <select
                id="appointment-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select time</option>
                <option value="10 AM - 12 PM">
                  10 AM – 12 PM
                </option>
                <option value="12 PM - 2 PM">
                  12 PM – 2 PM
                </option>
                <option value="2 PM - 4 PM">
                  2 PM – 4 PM
                </option>
                <option value="4 PM - 6 PM">
                  4 PM – 6 PM
                </option>
                <option value="6 PM - 9 PM">
                  6 PM – 9 PM
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="form-group full-width">
              <label htmlFor="appointment-message">
                Additional Message
              </label>

              <textarea
                id="appointment-message"
                name="message"
                placeholder="Tell us anything we should know..."
                value={formData.message}
                onChange={handleChange}
                rows="3"
              />
            </div>

          </div>

          <button type="submit" className="submit-btn">
            Submit Appointment Request
            <Send size={17} />
          </button>

          <small className="form-note">
            This demo form does not confirm a hospital appointment.
          </small>

        </form>

      </div>
    </section>
  );
}

export default AppointmentForm;
