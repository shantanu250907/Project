// export default PropertyListing;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import HomeImages from '../Assets/Images/HomeImages.jpg';
import Fhome from '../Assets/Images/Fhome.avif';
import Shome from '../Assets/Images/Shome.avif';
import Thome from '../Assets/Images/Thome.avif';
import Fohome from '../Assets/Images/Fohome.avif';
import Fihome from '../Assets/Images/Fihome.avif';
import Sihome from '../Assets/Images/Sihome.avif';
import Sehome from '../Assets/Images/Sehome.avif';
import Ehome from '../Assets/Images/Ehome.avif';
import PropImage from '../Assets/Images/PropImage.webp';
function PropertyListing() {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa",
      description: "Spacious villa with garden and pool.",
      images: [Fhome,Shome,Thome,Fohome,Fihome,Sihome,Sehome,Ehome]
    },
    {
      id: 2,
      title: "Urban Apartment",
      description: "2 BHK apartment in city center.",
      images: [HomeImages, Fhome]
    },
    {
      id: 3,
      title: "Cozy Cottage",
      description: "Small but beautiful home near the hills.",
      images: [HomeImages, HomeImages]
    },
    {
      id: 4,
      title: "Cozy Cottage",
      description: "Small but beautiful home near the hills.",
      images: [HomeImages, HomeImages]
    },
    {
      id: 5,
      title: "Cozy Cottage",
      description: "Small but beautiful home near the hills.",
      images: [HomeImages, HomeImages]
    },
    {
      id: 6,
      title: "Cozy Cottage",
      description: "Small but beautiful home near the hills.",
      images: [HomeImages, HomeImages]
    },
    {
      id: 7,
      title: "Cozy Cottage",
      description: "Small but beautiful home near the hills.",
      images: [HomeImages, HomeImages]
    },
    {
      id: 8,
      title: "Cozy Cottage",
      description: "Small but beautiful home near the hills.",
      images: [HomeImages, HomeImages]
    },
    // Add more similarly...
  ];

  return (
    <div className="p-4">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img 
    src={PropImage}
    alt="logo-left" 
    style={{ width: '70px', height: '70px', marginRight: '10px' }}
  />
  <h1 style={{ 
    color: 'black', 
    fontFamily: 'Aries', 
    fontWeight: 'bolder', 
    textAlign: 'center' 
  }}>
   Houses Available </h1>
  <img 
    src={PropImage}
    alt="logo-right" 
    style={{ width: '70px', height: '70px', marginLeft: '10px' }}
  />
</div> 
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {properties.map((property) => (
          <Col key={property.id}>
            <Card className="h-100">
              <Carousel indicators={false} controls={true} interval={3000}>
                {property.images.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={img}
                      alt={`${property.title} ${idx + 1}`}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PropertyListing;

