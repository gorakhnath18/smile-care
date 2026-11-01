
import { useState } from "react";
import { X, Images } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Modern Dental Clinic",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900",
  },
  {
    id: 2,
    title: "Dental Treatment Room",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900",
  },
  {
    id: 3,
    title: "Advanced Dental Equipment",
    category: "Equipment",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900",
  },
  {
    id: 4,
    title: "Professional Dental Care",
    category: "Treatment",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900",
  },
  {
    id: 5,
    title: "Dental Consultation",
    category: "Treatment",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900",
  },
  {
    id: 6,
    title: "Patient Care",
    category: "Treatment",
    image:
    
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900",
  },
];

const categories = ["All", "Interior", "Equipment", "Treatment"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">OUR GALLERY</span>
          <h2>
            Explore Our <span>Dental Care Environment</span>
          </h2>
          <p>
            Take a look at representative images of modern
            dental facilities, equipment and patient care.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <button
              className="gallery-card"
              key={item.id}
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />

              <div className="gallery-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <p className="gallery-disclaimer">
          Images are illustrative stock photographs and do not
          represent verified photographs of Smile Care Dental Hospital.
        </p>

        {selectedImage && (
          <div
            className="gallery-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="gallery-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <div
              className="gallery-lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} />
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;
