
import PropTypes from "prop-types";
// className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125"
/** Icon SVG found at Devicon.dev */
const GastbyIcon = ({ color }) => (
  <svg viewBox="0 0 128 128" className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
    <path fill="#64328B" d="M64,0C28.7,0,0,28.7,0,64v0c0,35.3,28.7,64,64,64s64-28.7,64-64v0C128,28.7,99.3,0,64,0z M13.2,64L64,114.8 C35.9,114.8,13.2,92.1,13.2,64z M75.4,113.5l-60.9-61C19.7,30,39.9,13.2,64,13.2c16.6,0,31.3,7.9,40.5,20.2l-7.5,7.2 C89.7,30.2,77.7,23.5,64,23.5c-17.6,0-32.5,11.2-38.1,26.8C33.1,57,75.4,98.8,78.1,102c12.7-4.7,22.3-15.5,25.4-28.9H81.9v-9.4 l33,0.2C114.8,88.2,98,108.4,75.4,113.5z"></path>
  </svg>
);

GastbyIcon.propTypes = {
  color: PropTypes.string.isRequired
};

export default GastbyIcon;
