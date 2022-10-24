import React from "react";
import styled from "styled-components";

const Contact_us = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    min-height:1000px;

   
    .common-heading{
      display:flex;
      align-item:center;
      justify-content:center;
      font-size:3rem;
      margin:1rem;
      color:#f638dc;

    }

    .contact-form input{
      min-height:3rem;
      border-radius:2rem;
      color:#f638dc;
      padding:1rem;
      }

      @media (max-width:878px){
        .contact-form input{
         width:24rem;
         max-width:18rem;
        }
        .contact-form textarea{
          // min-width:10rem;
          max-width:14rem;
          width:15px;
        }
        .contact-form {
          min-height:25rem;
          max-width: 10rem;
          width:20rem;
          margin: auto;
          display:flex;
          color:#f638dc;
        }
      }

      .contact-form textarea{
        min-height:14rem;
        min-width:34rem;
        border-radius:1rem;
        padding:1rem;
        color:#f638dc;
      }

      .contact-form {
        min-height:35rem;
        max-width: 30rem;
        width:50rem;
        margin: auto;
        display:flex;
        color:#f638dc;
      }

    .container {
      
      margin-top: 6rem;
      text-align: center;
     
      
        

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          justify-content:center;
          align-item:center;
          min-height:8rem;
          color:#f638dc;
        }



          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            min-height:3rem;
            max-width:8rem;
            display:flex;
            align-item:center;
            justify-content:center;

             
            &:hover {
              background-color: white;
              border: 1px solid purple;
              color: purple;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

     

      <div className="container">
        <div className="contact-form">
          <form
            
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="40"
              rows="4"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact_us;