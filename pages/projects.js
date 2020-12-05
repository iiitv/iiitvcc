import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Members() {
  return (
    <React.Fragment>
      <Header />
      <main className="mid">
        <div className="text">CODING CLUB 2020</div>

        <div className="container" >
          <p className="sub__text">FEATURED PROJECTS</p>
          <hr className="ver" />
          <div className="c-1">
            <div className="box">
              <p className="name">Project Name</p>
            </div>
          </div>


          <p className="sub__text">ALL PROJECTS</p>
          <hr className="ver" ></hr>
          <div className="c-1" >
            <div className="box">
              <p className="name">Project Name</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Members;
