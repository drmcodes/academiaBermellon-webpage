import styled from "styled-components";
import { useState } from "react";

const ContactSection = styled.section`
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--border-subtle),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -200px;
    right: -200px;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(201, 169, 98, 0.04) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const InfoColumn = styled.div``;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 60px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 45px;
    height: 1px;
    background: var(--accent-primary);
  }

  @media (max-width: 968px) {
    padding-left: 0;

    &::before {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  span {
    font-style: italic;
    color: var(--accent-primary);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 3rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-accent);
  font-size: 1.2rem;
  color: var(--accent-primary);
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.span`
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
`;

const InfoText = styled.span`
  display: block;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-subtle);
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
  }
`;

const FormColumn = styled.div``;

const Form = styled.form`
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: span 2;

    @media (max-width: 600px) {
      grid-column: span 1;
    }
  }
`;

const Label = styled.label`
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
  transition: var(--transition-fast);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
  transition: var(--transition-fast);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a962' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
  }

  option {
    background: var(--bg-card);
    color: var(--text-primary);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition-fast);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  font-family: "Lato", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1.2rem 2rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border: 1px solid var(--accent-primary);
  margin-top: 1.5rem;
  transition: var(--transition-fast);

  &:hover {
    background: transparent;
    color: var(--accent-primary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const MapSection = styled.div`
  margin-top: 6rem;
  padding: 3rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);

  @media (max-width: 968px) {
    margin-top: 4rem;
    padding: 2rem;
  }
`;

const MapContainer = styled.div`
  aspect-ratio: 21/9;
  border: 1px solid var(--border-subtle);
  position: relative;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    filter: grayscale(100%) invert(92%) contrast(90%);
  }

  @media (max-width: 968px) {
    aspect-ratio: 16/9;
  }

  @media (max-width: 600px) {
    aspect-ratio: 4/3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Grid>
          <InfoColumn>
            <SectionLabel>Contacto</SectionLabel>
            <Title>
              Hablemos de <span>Arte</span>
            </Title>
            <Description>
              Estamos aqui para responder tus preguntas, programar una visita al
              estudio o ayudarte a comenzar tu viaje artistico.
            </Description>

            <ContactInfo>
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <InfoContent>
                  <InfoLabel>Direccion</InfoLabel>
                  <InfoText>
                    Calle del Arte, 42
                    <br />
                    28001 Madrid, Espana
                  </InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoIcon>📞</InfoIcon>
                <InfoContent>
                  <InfoLabel>Telefono</InfoLabel>
                  <InfoText>+34 912 345 678</InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoIcon>✉️</InfoIcon>
                <InfoContent>
                  <InfoLabel>Email</InfoLabel>
                  <InfoText>info@atelier.es</InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoIcon>🕐</InfoIcon>
                <InfoContent>
                  <InfoLabel>Horario</InfoLabel>
                  <InfoText>
                    Lunes - Viernes: 10:00 - 20:00
                    <br />
                    Sabados: 10:00 - 14:00
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </ContactInfo>

            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">
                IG
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                FB
              </SocialLink>
              <SocialLink href="#" aria-label="Pinterest">
                PI
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                YT
              </SocialLink>
            </SocialLinks>
          </InfoColumn>

          <FormColumn>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Enviar Mensaje</FormTitle>
              <FormSubtitle>
                Completa el formulario y te responderemos en menos de 24 horas.
              </FormSubtitle>

              <FormGrid>
                <FormGroup>
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Telefono</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+34 600 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Asunto</Label>
                  <Select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar...</option>
                    <option value="cursos">Informacion de Cursos</option>
                    <option value="encargo">Encargo Personalizado</option>
                    <option value="visita">Visitar el Estudio</option>
                    <option value="colaboracion">Colaboracion</option>
                    <option value="otro">Otro</option>
                  </Select>
                </FormGroup>

                <FormGroup className="full-width">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuentanos en que podemos ayudarte..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormGrid>

              <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
            </Form>
          </FormColumn>
        </Grid>

        <MapSection>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6234567890123!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy42Ilc!5e0!3m2!1ses!2ses!4v1234567890123"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion del Estudio"
            />
          </MapContainer>
        </MapSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;
