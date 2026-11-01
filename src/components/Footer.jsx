
import { Phone, MapPin, Clock, Mail } from "lucide-react";
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand footer-logo">
            <span className="brand-icon">✚</span>
            <span>
              <strong>SmileCare</strong>
              <small>DENTAL HOSPITAL</small>
            </span>
          </a>

          <p>
            Comprehensive dental care with a focus on modern technology,
            hygiene and patient comfort in Kothapet, Hyderabad.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Treatments</a>
          <a href="#facilities">Facilities</a>
          <a href="#appointment">Appointments</a>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p><Phone size={16} /> <a href="tel:08500003922">085000 03922</a></p>
          <p>
            <MapPin size={16} />
            DSNR 11-9-7, New Nagole Main Road, SBI Colony, Kothapet,
            Hyderabad, Telangana 500102
          </p>
          <p><Mail size={16} /> Contact via phone for enquiries</p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p><Clock size={16} /> Monday – Saturday</p>
          <p>10:00 AM – 9:00 PM</p>
          <p>Sunday: 10:00 AM – 1:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Smile Care Dental Hospital. All rights reserved.</p>
          <p>Designed for better smiles.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
