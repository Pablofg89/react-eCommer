import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-36px",
                   marginBottom: "18px" }}>
        Información
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Sobre nosotos</Heading>
            <FooterLink href="#">Empresa</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonios</FooterLink>
          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">Ventas</FooterLink>
            <FooterLink href="#">Productos</FooterLink>
            <FooterLink href="#">Envios</FooterLink>
          </Column>
          <Column>
            <Heading>Contactenos</Heading>
            <FooterLink href="#">Correo</FooterLink>
            <FooterLink href="#">WhatsApp</FooterLink>
            <FooterLink href="#">Numero</FooterLink>
            <FooterLink href="#">Chat</FooterLink>
          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;