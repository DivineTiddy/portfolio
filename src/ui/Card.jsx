import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";
import propTypes from "prop-types";
import { motion } from "motion/react";

const cardVariants = {
  offscreen: {
    y: 50,
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
    @media (min-width: 768px) {
      margin-bottom: 0px;
    }
  }
  .div {
    margin-left: 24px;
    margin-top: 15px;
    width: 90%;
  }
`;
const Card = ({ url, title }) => {
  return (
    // <Layout>
    //   <div>
    //     <Heading as="h4">{title}</Heading>
    //     <Text type="use">{url}</Text>
    //   </div>
    // </Layout>
    <Layout>
      <motion.div
        className="styled-card"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardVariants}
      >
        <div>
          <Heading as="h4">{title}</Heading>
          <Text type="use">{url}</Text>
        </div>
      </motion.div>
    </Layout>
  );
};
Card.propTypes = {
  imgUrl: propTypes.string,
  url: propTypes.string,
  title: propTypes.string,
};

export default Card;
