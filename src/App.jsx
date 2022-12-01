import React from 'react';
import './App.css';
import Star from './Star';

function App() {
  const [contact, setContact] = React.useState({
    firstName: 'Lakshmi',
    lastName: 'Thulasi',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: false,
  });

  function toggleClick() {
    setContact((prevState) => ({
      ...prevState,
      isFavorite: !contact.isFavorite,
    }));
  }
  return (
    <main>
      <article className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          className="card--image"
        />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handle={toggleClick} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
