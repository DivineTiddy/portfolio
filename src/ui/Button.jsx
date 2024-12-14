import { motion } from "motion/react";
import "../index.css";
import arrow from "../assets/icons/arrow.svg";
import propTypes from "prop-types";

const Button = ({ content }) => {
  return (
    <motion.button
      className="
    styled-button"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img src={arrow} />
      {content}
    </motion.button>
  );
};
Button.propTypes = {
  content: propTypes.string,
};
export default Button;
