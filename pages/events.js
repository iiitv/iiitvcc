import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const events = () => {
  return (
    <React.Fragment>
      <main className="main__events">
        <Header />
          <p style={{height: "100vh", color: "white"}}>events</p>
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default events;
