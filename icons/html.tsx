import PropTypes from "prop-types";
// className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125"
/** Icon SVG found at Devicon.dev */
const HtmlIcon = ({ color }) => (
    <svg viewBox="0 0 128 128" className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
        <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
    </svg>
);

HtmlIcon.propTypes = {
  color: PropTypes.string
};

export default HtmlIcon;
