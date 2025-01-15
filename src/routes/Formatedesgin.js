/* eslint-disable react/jsx-pascal-case */
import styled from 'styled-components';
import './formatedDe.css';
import { TypeAnimation } from 'react-type-animation';

function FormateDesign(props) {
  return (
    <>
      <div className={props.cName}>
        <Section_12>
          <img alt="formatedde-hero" src={props.heroImg}></img>
        </Section_12>
        <div className="formatedde-hero-text">
          <h1>
            <TypeAnimation
              sequence={[props.title, 1000, 'Welcome To Travelo', 500]}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default FormateDesign;

const Section_12 = styled.div`
  position: relative;
  width: 100%;
  height: 90vh; /* Matches the height of the hero section */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the container */
    filter: brightness(60%); /* Adds a darker overlay */
    display: block; /* Removes extra space around the image */
  }
`;
