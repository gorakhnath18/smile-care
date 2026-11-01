 
import {
  ArrowRight,
  HeartPulse,
  Clock,
  Award,
  Stethoscope,
} from "lucide-react";

import Hero from "../components/Hero";
import Services from "./Services";
import Gallery from "./Gallery";
import Doctors from "./Doctors";
import Reviews from "./Reviews";
import Contact from "./Contact";
import AppointmentForm from "../components/AppointmentForm";

// HOSPITAL FACILITIES
const facilities = [
  {
    icon: Award,
    title: "NABH Accredited",
    description:
      "Kothapet branch accreditation as supplied.",
  },
  {
    icon: Clock,
    title: "Convenient Timings",
    description:
      "Open six days a week, with Sunday morning hours.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Care",
    description:
      "Multiple dental specialties under one roof.",
  },
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "A focus on patient comfort, hygiene and clear communication.",
  },
];

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div id="home">
        <Hero />
      </div>

      {/* HOSPITAL STATISTICS */}
      <section className="stats-section">
        <div className="container stats-grid">

          <div className="stat-item">
            <strong>2001</strong>
            <span>Established</span>
          </div>

          <div className="stat-item">
            <strong>4.8 ★</strong>
            <span>Google Rating</span>
          </div>

          <div className="stat-item">
            <strong>Multi-Specialty</strong>
            <span>Dental Hospital</span>
          </div>

          <div className="stat-item">
            <strong>NABH</strong>
            <span>Kothapet Accreditation</span>
          </div>

        </div>
      </section>

      {/* ABOUT HOSPITAL */}
      <section className="section about-section" id="about">
        <div className="container about-grid">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900"
              alt="Illustrative modern dental hospital interior"
              loading="lazy"
            />

            <div className="about-image-badge">
              <strong>Since 2001</strong>
              <span>Committed to dental care</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">
              ABOUT OUR HOSPITAL
            </span>

            <h2>
              Healthy Teeth.
              <span> Confident Smiles.</span>
            </h2>

            <p>
              Smile Care Dental Hospital is a multi-specialty
              dental practice in Kothapet, Hyderabad, established
              in 2001. The hospital focuses on comprehensive
              dental care, modern technology, hygiene and
              patient comfort.
            </p>

            <p>
              From routine dental check-ups to specialized
              treatments, our goal is to help patients make
              informed decisions about their oral health.
            </p>

            <a href="#contact" className="text-link">
              Discover Our Hospital
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* TREATMENTS */}
      <Services />

      {/* HOSPITAL FACILITIES */}
      <section
        className="section facilities-section"
        id="facilities"
      >
        <div className="container">

          <div className="section-heading">
            <span className="section-tag">
              WHY CHOOSE US
            </span>

            <h2>
              Dental Care You Can
              <span> Feel Confident About</span>
            </h2>

            <p>
              A patient-focused approach supported by modern
              dental facilities.
            </p>
          </div>

          <div className="facilities-grid">
            {facilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="facility-card"
                  key={item.title}
                >
                  <Icon size={30} />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* DOCTORS */}
      <Doctors />

      {/* PATIENT REVIEWS */}
      <Reviews />

      {/* APPOINTMENT FORM */}
      <AppointmentForm />

      {/* CONTACT SECTION */}
      <Contact />

      {/* FINAL APPOINTMENT CTA */}
      <section
        className="appointment-banner"
        id="appointment-cta"
      >
        <div className="container appointment-content">

          <div>
            <span>
              YOUR JOURNEY TO A HEALTHIER SMILE STARTS HERE
            </span>

            <h2>
              Ready to Give Your Smile the Care It Deserves?
            </h2>

            <p>
              Contact Smile Care Dental Hospital to enquire
              about an appointment.
            </p>
          </div>

          <a
            href="tel:08500003922"
            className="btn-light"
          >
            <Clock size={18} />
            Call 085000 03922
          </a>

        </div>
      </section>
    </>
  );
}

export default Home;
