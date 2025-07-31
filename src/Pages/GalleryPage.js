import React from "react";
import "./GalleryPage.css"; // CSS file for styling


const properties = [
  {
  id: 1,
  title: "Modern 2BHK Apartment",
  location: "Mumbai",
  description: "A spacious and well-lit 2BHK apartment located in a prime area of Mumbai. Features include a sea-facing balcony, modular kitchen, two bathrooms, and nearby access to schools, markets, and transport.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
},

  {
  id: 2,
  title: "Cozy Studio Flat",
  location: "Pune",
  description: "Ideal for working professionals, this compact studio features a smart layout, work desk, modern kitchen setup, and is close to tech parks and cafes.",
  image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd9?auto=format&fit=crop&w=800&q=80",
},

  {
  id: 3,
  title: "3BHK Family Home",
  location: "Nashik",
  description: "Perfect for families, this 3BHK offers a calm neighborhood, garden space, three spacious bedrooms, and parking area for two vehicles.",
  image: "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
},

  {
  id: 4,
  title: "Luxury Villa",
  location: "Lonavala",
  description: "A premium villa surrounded by nature, featuring a private pool, outdoor seating, garden space, and beautiful hill views. Ideal for weekend getaways and family retreats.",
  image: "https://images.unsplash.com/photo-1600585153930-879e38e36da8?auto=format&fit=crop&w=800&q=80",
},

];

export default function GalleryPage() {
  return (
    <div className="gallery-container fade-slide">
      <h2 className="gallery-title">🏘️ Property Gallery</h2>
      <div className="gallery-grid">
        {properties.map((property) => (
          <div className="gallery-card" key={property.id}>
            <img src={property.image} alt={property.title} className="gallery-image" />
            <div className="gallery-content">
              <h3>{property.title}</h3>
              <p className="gallery-location">{property.location}</p>
              <p>{property.description}</p>
              <button className="view-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
