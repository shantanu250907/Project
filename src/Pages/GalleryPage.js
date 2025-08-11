import React from "react";
import "./GalleryPage.css"; // CSS file for styling


const properties = [
  {
  id: 1,
  title: "1 RK Flat, In Sai Villa Apartment for Renttt ",
  location: "Nashik",
  description: "A spacious and well-lit 2BHK apartment located in a prime area of Mumbai. Features include a sea-facing balcony, modular kitchen, two bathrooms, and nearby access to schools, markets, and transport.",
  image: "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
},

  {
  id: 2,
  title: "1 BHK Flat, In Siddhhivinayak Apartment For Rent",
  location: "Nashik",
  description: "Ideal for working professionals, this compact studio features a smart layout, work desk, modern kitchen setup, and is close to tech parks and cafes.",
  image: "https://images.nobroker.in/images/8a9fa2849823a43c019823b795f90390/8a9fa2849823a43c019823b795f90390_69980_379772_large.jpg",
},

  {
  id: 3,
  title: " BHK Flat, In Abhishek Apartment For Rent",
  location: "Nashik",
  description: "Perfect for families, this 3BHK offers a calm neighborhood, garden space, three spacious bedrooms, and parking area for two vehicles.",
  image:"https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_16552_262615_large.jpg", },

  {
  id: 4,
  title: "2 BHK Flat, in Krishnapranit Apartment for Rent",
  location: "Nashik",
  description: "A premium villa surrounded by nature, featuring a private pool, outdoor seating, garden space, and beautiful hill views. Ideal for weekend getaways and family retreats.",
  image: "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",},
{
  id: 5,
  title: "1 RK Flat, In Sai Villa Apartment for Renttt ",
  location: "Nashik",
  description: "A spacious and well-lit 2BHK apartment located in a prime area of Mumbai. Features include a sea-facing balcony, modular kitchen, two bathrooms, and nearby access to schools, markets, and transport.",
  image: "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
},

  {
  id: 6,
  title: "1 BHK Flat, In Siddhhivinayak Apartment For Rent",
  location: "Nashik",
  description: "Ideal for working professionals, this compact studio features a smart layout, work desk, modern kitchen setup, and is close to tech parks and cafes.",
  image: "https://images.nobroker.in/images/8a9fa2849823a43c019823b795f90390/8a9fa2849823a43c019823b795f90390_69980_379772_large.jpg",
},

  {
  id: 7,
  title: " BHK Flat, In Abhishek Apartment For Rent",
  location: "Nashik",
  description: "Perfect for families, this 3BHK offers a calm neighborhood, garden space, three spacious bedrooms, and parking area for two vehicles.",
  image:"https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_16552_262615_large.jpg", },

  {
  id: 8,
  title: "2 BHK Flat, in Krishnapranit Apartment for Rent",
  location: "Nashik",
  description: "A premium villa surrounded by nature, featuring a private pool, outdoor seating, garden space, and beautiful hill views. Ideal for weekend getaways and family retreats.",
  image: "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",},


];

export default function GalleryPage() {
  return (
    <div className="gallery-container fade-slide">
      <h2 className="gallery-title">🏘️ Property Gallery</h2>
      <div className="gallery-grid">
        {properties.map((property) => (
          <div className="gallery-card " key={property.id}>
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
