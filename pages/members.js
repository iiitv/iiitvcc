import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import members from '../members.json'

function Members() {
  return (
    <React.Fragment>
      <Header />
      <main className="mid">
        {console.log(members)}
        <div className="text">CODING CLUB 2022</div>

        <div className="container" >
          <p className="sub__text">LEADS</p>
          <hr className="ver" />
          <div className="c-1">
            {
              members.leads.map((ele, ind) => {
                return (
                  <div className="box">
                    <div className="centerline"
                      style={{
                        color: "rgb(255,199,0)",
                        padding: "15px"
                      }}>
                      <p style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "16px"
                      }}>
                        {ele.name} </p>
                      <br />
                      {ele.desc}
                    </div>
                    <p className="name">{ele.name}</p>
                  </div>
                )
              })
            }
          </div>


          <p className="sub__text">MEMBERS</p>
          <hr className="ver" ></hr>
          <div className="c-1" >
            {
              members.members.map((ele, ind) => {
                return (
                  <div className="box">
                    <p className="name">{ele.name}</p>
                  </div>
                )
              })
            }
          </div>

          <p className="sub__text">FOOBARS</p>
          <hr className="ver" ></hr>
          <div className="c-1" >
            {
              members.foobars.map((ele, ind) => {
                return (
                  <div className="box">
                    <p className="name">{ele.name}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Members;
