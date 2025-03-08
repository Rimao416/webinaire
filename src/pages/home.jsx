import React from 'react';
import '../styles/Home.css'; // On importe le fichier CSS
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="home">
      {/* Section Hero */}
      <Navbar/>
      <section className="hero">
        <h1>Bienvenue sur Mon Site Professionnel</h1>
        <p>Découvrez des solutions modernes et innovantes pour vos besoins en développement web.</p>
        <a href="/contact" className="cta-button">
          Nous Contacter
        </a>
      </section>

      {/* Section Services */}
      <section className="services">
        <h2>Nos Services</h2>
        <div className="service-cards">
          {/* Service 1 */}
          <div className="service-card">
            <h3>Développement Web</h3>
            <p>
              Création de sites web modernes, réactifs et performants avec les dernières technologies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <h3>Conseil en UX/UI</h3>
            <p>
              Optimisation de l'expérience utilisateur et conception d'interfaces intuitives et élégantes.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <h3>Formation</h3>
            <p>
              Cours et ateliers sur React, JavaScript, CSS et bien plus encore pour vous aider à monter en compétences.
            </p>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta">
        <h2>Prêt à commencer votre projet ?</h2>
        <p>Contactez-nous dès aujourd'hui pour discuter de vos besoins.</p>
        <a href="/contact" className="cta-button">
          Nous Contacter
        </a>
      </section>
    </div>
  );
}

export default Home;