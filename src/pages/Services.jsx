
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Sparkles,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";

const services = [
  {
    number: "01",
    category: "RESTORATIVE DENTISTRY",
    title: "Root Canal Treatment",
    description:
      "Root canal treatment is used to treat infection or damage inside a tooth. The procedure aims to relieve discomfort and help preserve the natural tooth.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900",
    benefits: [
      "Helps preserve natural teeth",
      "Treats infected dental pulp",
      "Helps relieve tooth pain",
    ],
  },
  {
    number: "02",
    category: "IMPLANT DENTISTRY",
    title: "Dental Implants",
    description:
      "Dental implants are designed to replace missing teeth. An implant-supported restoration can help restore chewing function and the appearance of a natural smile.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900",
    benefits: [
      "Replacement option for missing teeth",
      "Supports chewing function",
      "Designed for long-term restoration",
    ],
  },
  {
    number: "03",
    category: "ORTHODONTIC DENTISTRY",
    title: "Braces & Clear Aligners",
    description:
      "Orthodontic treatment helps correct teeth alignment and certain bite problems using braces or removable clear aligners, depending on individual needs.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900",
    benefits: [
      "Helps improve teeth alignment",
      "Addresses selected bite problems",
      "Multiple treatment options",
    ],
  },
  {
    number: "04",
    category: "CHILDREN'S DENTISTRY",
    title: "Pediatric Dentistry",
    description:
      "Pediatric dentistry focuses on children's oral health through preventive examinations, dental guidance and age-appropriate dental treatments.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900",
    benefits: [
      "Supports healthy dental development",
      "Encourages good oral hygiene habits",
      "Age-appropriate dental care",
    ],
  },
  {
    number: "05",
    category: "PERIODONTAL DENTISTRY",
    title: "Gum & Laser Treatment",
    description:
      "Gum treatments address conditions affecting the tissues surrounding the teeth. Laser-assisted procedures may be suitable for selected cases following clinical assessment.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900",
    benefits: [
      "Focuses on gum health",
      "Addresses selected gum conditions",
      "Laser-assisted options where appropriate",
    ],
  },
  {
    number: "06",
    category: "COSMETIC DENTISTRY",
    title: "Teeth Whitening",
    description:
      "Professional teeth whitening is a cosmetic dental procedure designed to reduce certain types of tooth discoloration and improve smile appearance.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900",
    benefits: [
      "Helps reduce selected stains",
      "Professional treatment assessment",
      "Enhances smile appearance",
    ],
  },
  {
    number: "07",
    category: "RESTORATIVE DENTISTRY",
    title: "Crowns & Bridges",
    description:
      "Dental crowns can restore damaged or weakened teeth, while bridges can replace one or more missing teeth using supporting teeth or implants.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900",
    benefits: [
      "Restores damaged teeth",
      "Replacement option for missing teeth",
      "Supports dental function",
    ],
  },
  {
    number: "08",
    category: "AESTHETIC DENTISTRY",
    title: "Smile Design",
    description:
      "Smile design involves evaluating the appearance of teeth and gums to plan suitable cosmetic dental treatments according to individual preferences and clinical needs.",
    image:
      "https://images.unsplash.com/photo-1491604612772-6853927639ef?w=900",
    benefits: [
      "Personalized treatment planning",
      "Focuses on smile aesthetics",
      "Multiple cosmetic options",
    ],
  },
  {
    number: "09",
    category: "COMPREHENSIVE DENTISTRY",
    title: "Full Mouth Rehabilitation",
    description:
      "Full mouth rehabilitation combines suitable restorative and other dental treatments to address multiple dental concerns through an individualized treatment plan.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900",
    benefits: [
      "Comprehensive dental assessment",
      "Individualized treatment planning",
      "Focus on oral function and comfort",
    ],
  },
  {
    number: "10",
    category: "PREVENTIVE DENTISTRY",
    title: "General Dental Checkup",
    description:
      "Routine dental checkups help assess oral health, identify potential dental concerns and provide guidance on preventive care and oral hygiene.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900",
    benefits: [
      "Routine oral health assessment",
      "Early identification of concerns",
      "Preventive dental guidance",
    ],
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Patient-Focused Care",
    description:
      "Treatment planning based on individual dental needs.",
  },
  {
    icon: Stethoscope,
    title: "Multiple Specialties",
    description:
      "A range of general and specialized dental services.",
  },
  {
    icon: HeartPulse,
    title: "Modern Technology",
    description:
      "Digital imaging, dental lasers and intraoral scanning are among the facilities described by the hospital.",
  },
  {
    icon: Sparkles,
    title: "Personalized Approach",
    description:
      "Treatment options discussed according to clinical assessment.",
  },
];

function Services() {
  return (
    <main className="treatments-page" id="services">

      {/* PAGE HERO */}
      <section className="treatments-hero">
        <div className="container treatments-hero-content">

          <span className="section-tag">
            SMILE CARE DENTAL HOSPITAL
          </span>

          <h1>
            Complete Dental Care
            <span> For Every Smile</span>
          </h1>

          <p>
            Explore our range of dental treatments and
            discover suitable options for your oral health.
            Our dental team can guide you following a
            professional consultation.
          </p>

          <a href="#treatment-list" className="btn-primary">
            Explore Treatments
          </a>

        </div>
      </section>

      {/* TREATMENT INTRO */}
      <section className="treatment-intro">
        <div className="container">

          <div className="section-heading">
            <span className="section-tag">
              OUR DENTAL SERVICES
            </span>

            <h2>
              Treatments Designed Around
              <span> Your Dental Needs</span>
            </h2>

            <p>
              From preventive checkups to specialized
              restorative and cosmetic procedures,
              explore the dental treatment options below.
            </p>
          </div>

          {/* TREATMENT CARDS */}
          <div className="treatments-grid" id="treatment-list">

            {services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="treatment-features">
        <div className="container">

          <div className="section-heading">
            <span className="section-tag">
              THE SMILE CARE APPROACH
            </span>

            <h2>
              Dental Care With
              <span> Your Comfort in Mind</span>
            </h2>
          </div>

          <div className="treatment-features-grid">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className="treatment-feature-card"
                  key={feature.title}
                >
                  <div className="treatment-feature-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="treatments-cta">
        <div className="container treatments-cta-content">

          <div>
            <span>TAKE THE FIRST STEP</span>

            <h2>
              Need Help Choosing the Right Treatment?
            </h2>

            <p>
              Contact Smile Care Dental Hospital to enquire
              about a dental consultation.
            </p>
          </div>

          <a href="#appointment" className="btn-light">
            Book Appointment
          </a>

        </div>
      </section>

    </main>
  );
}

export default Services;

