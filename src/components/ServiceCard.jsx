
import { ArrowRight, CheckCircle2 } from "lucide-react";

function ServiceCard({ service }) {
  return (
    <article className="treatment-card">

      {/* TREATMENT IMAGE */}
      <div className="treatment-image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          className="treatment-image"
          loading="lazy"
        />

        <span className="treatment-number">
          {service.number}
        </span>
      </div>

      {/* TREATMENT CONTENT */}
      <div className="treatment-content">

        <span className="treatment-category">
          {service.category}
        </span>

        <h3>{service.title}</h3>

        <p className="treatment-description">
          {service.description}
        </p>

        {/* BENEFITS */}
        <div className="treatment-benefits">
          <h4>Key Benefits</h4>

          {service.benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <CheckCircle2 size={16} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* BOOK APPOINTMENT */}
        <a
          href="#appointment"
          className="treatment-book-btn"
        >
          Book Appointment
          <ArrowRight size={17} />
        </a>

      </div>
    </article>
  );
}

export default ServiceCard;
