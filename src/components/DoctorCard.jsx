
import {
  UserRound,
  Stethoscope,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">

      {/* DOCTOR IMAGE / PLACEHOLDER */}
      <div className="doctor-image-wrapper">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-image"
            loading="lazy"
          />
        ) : (
          <div className="doctor-placeholder">
            <UserRound size={85} strokeWidth={1.2} />
            <span>Doctor Profile</span>
          </div>
        )}

        <span className="doctor-specialty-badge">
          {doctor.specialty}
        </span>
      </div>

      {/* DOCTOR DETAILS */}
      <div className="doctor-card-content">

        <span className="doctor-label">
          <Stethoscope size={15} />
          OUR DENTAL SPECIALIST
        </span>

        <h3>{doctor.name}</h3>

        <h4>{doctor.designation}</h4>

        <p className="doctor-description">
          {doctor.description}
        </p>

        {/* EXPERTISE */}
        <div className="doctor-expertise">
          <strong>Area of Practice</strong>

          <div className="expertise-tags">
            {doctor.expertise.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {/* APPOINTMENT BUTTON */}
        <a href="#appointment" className="doctor-book-btn">
          <CalendarDays size={17} />
          Book Appointment
          <ArrowRight size={17} />
        </a>

      </div>
    </article>
  );
}

export default DoctorCard;
