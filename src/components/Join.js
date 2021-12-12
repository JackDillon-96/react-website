import React, { useState } from "react";
import styled from "styled-components";
import image from "../assets/getstarted.jpg";


export default function Join () {
  return (
    <Section id="join">
      <div className="container">
        <h1 className="title">Get Started</h1>
        <h2>Join the UK's fastest growing bank</h2>
        <h4>Fast reliable UK wide coverage to keep you connected at all times</h4>
        <button className="button">Join Today</button>
      </div>
      <img src={image} alt="" className="image"/>
    
    </Section>
  );
}
 

const Section = styled.section`
  padding: 2rem ;
  display: flex;
  align-items: center;
  .container {
    text-align: center;
    width: 50%;
    float: left;
  }
  .title {
    color: #201f42
  }
  .button{
    padding:0.3em 1.2em;
    margin:0 0.3em 0.3em 0;
    border-radius:2em;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    font-size: 15px;
    color:#FFFFFF;
    background-color:#2b2d45;
    text-align:center;
    transition: all 0.2s;
    border: none;
    width: 110px;
    height: 40px;
  }
  .button:hover {
    background-color: #201f42
  }
  
`