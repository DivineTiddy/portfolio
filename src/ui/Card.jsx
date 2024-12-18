import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";
import propTypes from "prop-types";
import { motion } from "motion/react";

const cardVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};
const Layout = styled.div`
  width: 298px;
  height: 380px;

  .styled-card {
    width: 298px;
    height: 380px;
    background-color: black;
    border-radius: 5px;

    @media (min-width: 768px) {
      margin-bottom: 0px;
    }
  }
  .div {
    margin-left: 24px;
    margin-top: 15px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .btn-container {
      display: flex;
      gap: 20px;
      button {
        font-size: 16px;
        line-height: 19px;
        font-family: "Roboto", serif;
        background-color: var(--ashe-color);
        border: none;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
`;
const Card = ({ url, title, imgUrl, link, code }) => {
  return (
    <Layout>
      <motion.div
        className="styled-card"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardVariants}
      >
        <div className="div">
          <span>
            <Heading as="h4">{title}</Heading>
            <Text type="use">{url}</Text>
            <span className="btn-container">
              <a href={link}>
                <button>view</button>
              </a>
              <a href={code}>
                <button>code</button>
              </a>
            </span>
          </span>
          <img width="100%" src={imgUrl} />
        </div>
      </motion.div>
    </Layout>
  );
};
Card.propTypes = {
  imgUrl: propTypes.string,
  url: propTypes.string,
  title: propTypes.string,
  link: propTypes.string,
  code: propTypes.string,
};

export default Card;
