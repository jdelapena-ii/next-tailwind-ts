

import PropTypes from "prop-types";
// className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125"
/** Icon SVG found at Devicon.dev */
const CssIcon = ({ color }) => (
    <svg viewBox="0 0 128 128" className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
        <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
    </svg>
);

CssIcon.propTypes = {
  color: PropTypes.string.isRequired
};

export default CssIcon;
