import React, { Component } from 'react';
import './Cover.css'
import React,{ useState } from 'react';
import {Mailicon} from 'react-mail-icon';

class Cover extends Component {
    render() {
        return (
      <div className="Mid">
            
               <div className="text">CODING CLUB 2020  </div>
            
               <p className="text-1">LEADERS</p>
               

           <div className="container" >
              <hr className="ver" ></hr>                   
                    <div className="c-1">
                   
                       <div className="box fi">
                           
                           <div className="centerline" 
                           style={{color:"rgb(255,199,0)",
                           padding:"15px"}}>
                           
                              <p style={{
                                  color:"white", 
                                  textAlign:"center",
                                  margin:"15px"}}> 
                                  
                                  Neeraj Raj Purohit </p> <br/>

                               A very good line about this person he is very good in real
                               as well as in virtual world because he lives in both worlds,
                               and once again, I want to say he is very good


                           </div>

                           <p className="name">Neeraj Rajpurohit</p>
                       </div>
     
                       <div className="box">
                           <p className="name">Pushkar Patel</p>
                       </div> 
                   
                    </div>
                       
                       
                    <p className="text-2">MEMBERS</p>
                    <hr className="ver2" ></hr> 
                   <div className="c-2" >
                   
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>

                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>

                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                        
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                       
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                       
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                       
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                 
                  </div>

                  <p className="text-2">FOOBARS</p>
                    <hr className="ver2" ></hr> 

                  <div className="c-3" >
                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>

                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>

                        <div className="boxy">
                            <p className="name">Aman Raj</p>
                        </div>
                  </div>
            
          </div>

            
    </div>
        );
    }
}

export default Cover;
