import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlane, 
  FaHotel, 
  FaCar, 
  FaMapMarkedAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import InstagramFeed from './components/InstagramFeed';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <FaPlane className="nav-logo" />
            <span>VDF Travel</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#destinos" className="nav-link">Destinos</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Descubre el Mundo
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vive experiencias únicas y crea recuerdos inolvidables
          </motion.p>
          <motion.button 
            className="hero-button"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Destinos
          </motion.button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Destinos Section */}
      <section id="destinos" className="destinos">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Destinos Populares
          </motion.h2>
          
          <div className="destinos-grid">
            {[
              {
                name: "París, Francia",
                image: "https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2021/03/Literary-tour-of-France.jpg",
                description: "La ciudad del amor y la luz"
              },
              {
                name: "Tokio, Japón",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Futuro y tradición en armonía"
              },
              {
                name: "Nueva York, USA",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "La ciudad que nunca duerme"
              },
              {
                name: "Santorini, Grecia",
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Paraísos en el Egeo"
              }
            ].map((destino, index) => (
              <motion.div 
                key={index}
                className="destino-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="destino-image">
                  <img src={destino.image} alt={destino.name} />
                </div>
                <div className="destino-content">
                  <h3>{destino.name}</h3>
                  <p>{destino.description}</p>
                  <button className="destino-button">Ver Más</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="instagram-section">
        <div className="container">
          <InstagramFeed />
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="servicios">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h2>
          
          <div className="servicios-grid">
            {[
              {
                icon: <FaPlane />,
                title: "Vuelos",
                description: "Reserva tus vuelos con las mejores aerolíneas del mundo"
              },
              {
                icon: <FaHotel />,
                title: "Hoteles",
                description: "Alojamiento en hoteles de lujo y boutique"
              },
              {
                icon: <FaCar />,
                title: "Transporte",
                description: "Alquiler de coches y traslados privados"
              },
              {
                icon: <FaMapMarkedAlt />,
                title: "Excursiones",
                description: "Tours guiados y experiencias únicas"
              }
            ].map((servicio, index) => (
              <motion.div 
                key={index}
                className="servicio-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="servicio-icon">
                  {servicio.icon}
                </div>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>¿Listo para tu próxima aventura?</h2>
            <p>Únete a miles de viajeros que ya han descubierto el mundo con nosotros</p>
            <button className="cta-button">Reservar Ahora</button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <FaPlane className="footer-logo" />
                <span>TravelDreams</span>
              </div>
              <p>Haciendo realidad tus sueños de viaje desde 2020</p>
              <div className="social-links">
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://x.com/"><FaTwitter /></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Contacto</h3>
              <div className="contact-info">
                <p><FaPhone /> (+507) 236-5555</p>
                <p><FaEnvelope /> info@vdftravel.com</p>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#destinos">Destinos</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 VDF Travel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
