
import {
  Award,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import DoctorCard from "../components/DoctorCard";

const doctors = [
  {
    id: 1,
    name: "Dr. V. Vijaya",
    designation: "Periodontist & Implantologist",
    specialty: "Gum & Implant Care",
    description:
      "Provides specialized dental care in periodontology and dental implantology, with a focus on gum health and tooth replacement solutions.",
    expertise: [
      "Periodontology",
      "Dental Implants",
      "Gum Treatment",
    ],
    image: null,
  },
  {
    id: 2,
    name: "Dr. M. Ravikanth",
    designation: "Dentist",
    specialty: "Dental Care",
    description:
      "A dental professional with healthcare-management training, associated with Smile Care Dental Hospital in Kothapet, Hyderabad.",
    expertise: [
      "Dental Care",
      "Patient Consultation",
      "Healthcare Management",
    ],
    image: null,
  },
];

const highlights = [
  {
    icon: Award,
    title: "Experienced Practice",
    description: "Hospital established in 2001.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Focused Care",
    description: "Emphasis on patient comfort and communication.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    description: "NABH accreditation at the Kothapet branch.",
  },
  {
    icon: Stethoscope,
    title: "Specialized Dentistry",
    description: "Periodontal, implant and general dental care.",
  },
];

function Doctors() {
  return (
    <section className="doctors-section" id="doctors">

      <div className="container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <span className="section-tag">
            MEET OUR DENTAL TEAM
          </span>

          <h2>
            Meet Our
            <span> Dental Specialists</span>
          </h2>

          <p>
            Get to know the dental professionals associated
            with Smile Care Dental Hospital, Kothapet,
            Hyderabad.
          </p>
        </div>

        {/* DOCTOR CARDS */}
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))}
        </div>

        {/* DOCTOR SECTION HIGHLIGHTS */}
        <div className="doctor-highlights">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="doctor-highlight-card"
                key={item.title}
              >
                <div className="highlight-icon">
                  <Icon size={27} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}

        </div>

        {/* APPOINTMENT CTA */}
        <div className="doctors-cta">
          <div>
            <h3>Looking for Dental Care?</h3>
            <p>
              Contact Smile Care Dental Hospital to enquire
              about a consultation.
            </p>
          </div>

          <a href="#appointment" className="btn-primary">
            Book Appointment
          </a>
        </div>

      </div>

    </section>
  );
}

export default Doctors;
