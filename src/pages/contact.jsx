import React, { useState } from 'react';
import '../styles/Contact.css'; // On importe le fichier CSS

function Contact() {
  // États pour stocker les valeurs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci, ${name}! Votre message a été envoyé.`);
    // Réinitialiser le formulaire après soumission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Nous serions ravis de répondre à vos questions.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Champ Nom */}
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Champ Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Champ Sujet */}
        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        {/* Champ Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {/* Bouton Envoyer */}
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;