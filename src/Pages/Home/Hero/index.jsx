import video from "../../../assets/webm/hero-video.webm"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  position: relative;
`



const Hero = () => {
  return (
    <Container>
          <div className="hero-video">
            <video src={video} autoPlay loop muted></video>
            <div className="absolute-div">
              <h1 className="absolute-h1">
                Formando artistas de todas las edades en técnicas de dibujo y
                bellas artes
              </h1>
              <p className="absolute-p">
                Descubre tu pasión por el arte y desarrolla tu talento con
                nosotros
              </p>
              <div className="boton">
              <button className="absolute-btn">Explorar</button>
              <button className="absolute-btn">Inscribirme</button>   
              </div>
             
            </div>
          </div>
        </Container>
  )
}

export default Hero