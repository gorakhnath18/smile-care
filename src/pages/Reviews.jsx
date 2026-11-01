
import { useRef } from "react";

import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ExternalLink,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sample Patient 1",
    treatment: "Dental Consultation",
    rating: 5,
    review:
      "This is a sample testimonial. Replace it with genuine patient feedback after receiving permission to publish.",
  },
  {
    id: 2,
    name: "Sample Patient 2",
    treatment: "Root Canal Treatment",
    rating: 5,
    review:
      "This is a demo review for the website layout. Add an authentic patient experience here.",
  },
  {
    id: 3,
    name: "Sample Patient 3",
    treatment: "Dental Implants",
    rating: 5,
    review:
      "This sample content demonstrates how patient feedback will appear on the website.",
  },
  {
    id: 4,
    name: "Sample Patient 4",
    treatment: "General Dental Care",
    rating: 5,
    review:
      "Replace this demo text with a genuine review shared by a patient with permission.",
  },
];

function Reviews() {
  const sliderRef = useRef(null);

  const scrollReviews = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      ".review-card"
    );

    if (!card) return;

    const cardWidth = card.offsetWidth + 22;

    sliderRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <span className="section-tag">
            PATIENT EXPERIENCES
          </span>

          <h2>
            What Our Patients
            <span> Say About Us</span>
          </h2>

          <p>
            Patient experiences help us understand what
            matters most in dental care.
          </p>
        </div>

        {/* RATING SUMMARY */}
        <div className="reviews-summary">

          <div className="rating-number">
            <strong>4.8</strong>

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={21}
                  fill="currentColor"
                />
              ))}
            </div>

            <span>Google rating as supplied</span>
          </div>

          <div className="rating-divider"></div>

          <div className="rating-message">
            <h3>Your Experience Matters</h3>
            <p>
              We welcome genuine feedback to help us
              continuously improve our patient care.
            </p>
          </div>

        </div>

        {/* DEMO NOTICE */}
        <p className="reviews-demo-notice">
          These are sample demo testimonials, not verified
          patient reviews. Replace them before publishing.
        </p>

        {/* REVIEW SLIDER */}
        <div className="reviews-slider-wrapper">

          <div
            className="reviews-slider"
            ref={sliderRef}
          >
            {reviews.map((item) => (
              <article
                className="review-card"
                key={item.id}
              >
                <div className="review-card-top">
                  <div className="review-quote-icon">
                    <Quote size={23} />
                  </div>

                  <div className="review-stars">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <span className="review-demo-label">
                  DEMO REVIEW
                </span>

                <p className="review-text">
                  "{item.review}"
                </p>

                <div className="review-author">
                  <div className="review-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.treatment}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* SLIDER CONTROLS */}
        <div className="reviews-controls">

          <div className="reviews-control-info">
            <span>Explore patient feedback</span>
          </div>

          <div className="reviews-arrows">
            <button
              onClick={() => scrollReviews("prev")}
              aria-label="Previous reviews"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scrollReviews("next")}
              aria-label="Next reviews"
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>

        {/* GOOGLE REVIEWS CTA */}
        <div className="google-reviews-box">
          <div>
            <h3>Visited Our Dental Hospital?</h3>
            <p>
              Share your genuine experience and help others
              make informed decisions.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Smile+Care+Dental+Hospital+Kothapet+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-btn"
          >
            <Star size={17} fill="currentColor" />
            View on Google
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Reviews;
