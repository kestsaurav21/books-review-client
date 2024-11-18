import React from 'react';
import styled from 'styled-components';
import { assets } from '../assets/assets';
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from 'react-icons/fa';

// Styled Components
const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const LogoImage = styled.img`
  width: 3rem; // default size
  @media (min-width: 768px) {
    width: 4rem; // md:w-16
  }
`;

const RightsText = styled.p`
  color: white;
  text-align: center;
  font-size: 0.875rem; // text-sm
  font-weight: bold;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1rem; // md:text-base
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem; // lg:text-xl
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <LogoContainer>
        <LogoImage src={assets.logo} alt="Company Logo" />
        <RightsText>
          All rights reserved. © 2024 BookInsight
        </RightsText>
      </LogoContainer>

      <SocialIconsContainer>
        <FaXTwitter color="white" size="1.5rem" />
        <FaLinkedin color="white" size="1.5rem" />
        <FaInstagramSquare color="white" size="1.5rem" />
      </SocialIconsContainer>
    </StyledFooter>
  );
};

export default Footer;
