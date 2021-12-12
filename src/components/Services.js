import React from "react";
import styled from "styled-components";
import { BiMoney } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export default function Services() {
  const data = [
    {
      icon: iconStyle(BiMoney),
      title: "Interest Rates",
      subTitle:
        "2% APR Guaranteed.",
    },
    {
        icon: iconStyle(RiSecurePaymentFill),
      title: "Secure Payments",
      subTitle:
        "Keeping Customer Payments Secure And Safe.",
    },
    {
        icon: iconStyle(FaBitcoin),
      title: "Fintech",
      subTitle:
        "Buy And Sell Cryptocurrencies.",
    },
    {
        icon: iconStyle(BiSupport), 
      title: "Support Centre",
      subTitle:
        "24/7 Support By Our Team.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
          console.log(service.icon)
        return (
          <div className="service">
            <div className="icon">
              <div>{service.icon}</div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-top: 150px;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;