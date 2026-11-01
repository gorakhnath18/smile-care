 
import { useState } from "react";

import {
  Menu,
  X,
  Phone,
  CalendarDays,
  MapPin,
  Clock,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // SCROLL TO APPOINTMENT FORM
  const scrollToAppointment = () => {
    setMenuOpen(false);

    setTimeout(() => {
      document
        .getElementById("appointment")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  // NAVIGATION LINKS
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#services" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Doctors", href: "#doctors" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-content">

          <div className="topbar-info">
            <span>
              <MapPin size={14} />
              Kothapet, Hyderabad
            </span>

            <span>
              <Clock size={14} />
              Mon - Sat: 10 AM - 9 PM
            </span>
          </div>

          <a href="tel:08500003922">
            <Phone size={14} />
            085000 03922
          </a>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="navbar">
        <div className="container navbar-container">

          {/* LOGO */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <div className="logo-icon">
              <span>SC</span>
            </div>

            <div className="logo-text">
              <strong>Smile Care</strong>
              <span>Dental Hospital</span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP APPOINTMENT BUTTON */}
          <button
            className="nav-appointment-btn"
            onClick={scrollToAppointment}
          >
            <CalendarDays size={17} />
            Book Appointment
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-nav ${
            menuOpen ? "mobile-nav-open" : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <button
            className="nav-appointment-btn mobile-appointment-btn"
            onClick={scrollToAppointment}
          >
            <CalendarDays size={17} />
            Book Appointment
          </button>

        </div>
      </header>
    </>
  );
}

export default Navbar;
