import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Delta Bank &copy; 2021</span>
      <div className="links">
      <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Our Mission</li>
          <li>Join Today</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Support</li>
          <li>Legal</li>
          <li>Investors</li>
        </ul>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #2b2d45;
  border-radius: 0.5rem;
  padding: 2.5rem;
  color: #fff;
  .links {
    width: 320px;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    color: #fff;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: row;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
