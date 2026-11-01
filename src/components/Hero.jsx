
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tag">
            <ShieldCheck size={16} />
            Trusted Dental Care Since 2001
          </div>

          <h1>
            Your Smile Deserves
            <span> Expert Care.</span>
          </h1>

          <p className="hero-description">
            Experience comprehensive dental care with modern technology,
            experienced dental professionals and a patient-first approach
            at Smile Care Dental Hospital, Hyderabad.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="btn-primary">
              Book an Appointment <ArrowRight size={18} />
            </a>

            <a href="tel:08500003922" className="btn-outline">
              Call Us: 085000 03922
            </a>
          </div>

          <div className="hero-rating">
            <div className="rating-stars">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <div>
              <strong>4.8 / 5</strong>
              <small>Google rating as supplied</small>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000"
            alt="Modern dental clinic and dental care"
            className="hero-image"
          />

          <div className="hero-image-label">
            <div className="label-icon">✚</div>
            <div>
              <strong>Complete Dental Care</strong>
              <small>Care for every smile</small>
            </div>
          </div>

          <div className="hero-experience">
            <strong>Since 2001</strong>
            <small>Serving smiles with care</small>
          </div>
        </div>
      </div>

      <div className="hero-bottom-shape"></div>
    </section>
  );
}

export default Hero;
