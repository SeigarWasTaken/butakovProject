import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Header from "./components/Header";
import Section from "./components/Section";
import ContactForm from "./components/Forms/ContactForm";
import BookingForm from "./components/Forms/BookingForm";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/animations.css";
import Services from "./components/Services";
import image1 from "./img/aisatsu2-300x278.png";
import image2 from "./img/travel_happy_family_father.png";
import image3 from "./img/vr_mr_syokuji_man.png";
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />

      <Element name="offer">

        <Section id="offer" title="" className="offer-section">
          <div className="container">
            <h1>Welcome to Japan!</h1>
            <p className="intro">Enjoy the culture, nature and hospitality of Japan.</p>
            <Link to="booking" smooth={true} duration={900} className="button">
              <button>Start your journey</button>
            </Link>
          </div>
        </Section>
      </Element>

      <Element name="about">
        <Section id="about" title="About Us" className="mainSection">
          <div className="container">
            <p>
              Our mission is to create unforgettable experiences for travelers exploring the wonders of Japan.
              With years of expertise in travel planning, our team of dedicated professionals ensures every detail of your trip is perfect.
              We pride ourselves on offering customized tours and excursions to fit your preferences and interests.
              Let us guide you through the beauty and diversity of Japan like never before.
            </p>
          </div>

        </Section>
      </Element>

      <Element name="advantages">
        <Section id="advantages" title="Our advantages" className="mainSection">
          <div className="container">
            <ul>
              <li>
                <strong>Personalized Itineraries:</strong> We tailor every trip to match your unique preferences and interests, ensuring a truly personal experience.
              </li>
              <li>
                <strong>Expert Guidance:</strong> Our team of professional guides and travel experts knows Japan inside and out, providing insights that go beyond the guidebooks.
              </li>
              <li>
                <strong>Top-Rated Tours:</strong> We partner with the best local businesses to deliver exceptional experiences, from cultural tours to luxury retreats.
              </li>
              <li>
                <strong>24/7 Support:</strong> Travel with peace of mind knowing that our team is always just a phone call away to assist you.
              </li>
            </ul>
          </div>

        </Section>
      </Element>

      <Element name="services">
        <Section id="services" title="Services" className="mainSection">
          <div className="container">
            <p>
              Discover our wide range of services designed to make your trip seamless and unforgettable. Whether you're looking for guided city tours,
              tranquil retreats in the mountains, or culinary adventures, we have something for everyone. Explore some of our most popular offerings below:
            </p>
            <div className="gallery">
              <div className="blocks">
                <Services img={image1} block__title="First block" block__text="Kyoto Tour" />
                <Services img={image2} block__title="Second block" block__text="Holidays in the mountains" />
                <Services img={image3} block__title="Third block" block__text="Gastronomic tours" />
              </div>
            </div>
          </div>

        </Section>
      </Element>

      <Element name="reviews">
        <Section id="reviews" title="Reviews" className="mainSection">
          <div className="container">
            <p>
              Don't just take our word for it—hear what our travelers have to say about their experiences with us!
              We are proud to have helped thousands of visitors discover the magic of Japan.
              Here's what some of our happy customers have shared:
            </p>
            <div className="review">
              <p><i>
                "This trip was absolutely incredible! The team went above and beyond to ensure every detail was perfect.
                I can't recommend them enough."</i>
              </p>
              <span>— Ligma B.</span>
            </div>
            <div className="review">
              <p><i>
                "I’ve always dreamed of visiting Japan, and this experience exceeded all of my expectations.
                From the breathtaking views to the delicious food, everything was flawless."</i>
              </p>
              <span>— Iladys N.</span>
            </div>
          </div>

        </Section>
      </Element>

      <Element name="contact">
        <Section id="contact" title="Contacts" className="contact-section">
          <div className="container">
            <p>
              Have questions or need help planning your trip? We're here to assist you!
              Reach out to us via the form below, and one of our travel experts will get back to you shortly.
              We look forward to helping you create unforgettable memories in Japan.
            </p>
            <ContactForm />
          </div>

        </Section>
      </Element>

      <Element name="booking">
        <Section id="booking" title="Booking" className="booking-section">
          <div className="container">
            <p>
              Ready to start your journey? Use the form below to reserve your spot on one of our unforgettable tours.
              Select your preferred dates, and let us know what kind of experience you're looking for.
              We can’t wait to welcome you to Japan!
            </p>
            <BookingForm />
          </div>

        </Section>
      </Element>

      <Footer />
    </div>
  );
};

export default App;
