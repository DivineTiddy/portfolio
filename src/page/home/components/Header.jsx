import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { motion } from "motion/react";

const Layout = styled.header`
  width: 100%;
  height: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    width: 298px;
    height: 226.69px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    @media (min-width: 768px) {
      width: 534px;
      height: 142px;
      gap: 4px;
    }
  }
`;
const Header = () => {
  return (
    <Layout>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="hero-content">
        <Heading as="h1">YOUR NAME</Heading>
        <Heading as="h2">WEB-DESIGNER</Heading>
      </motion.div>
      {/* <div className="hero-content">
        <Heading as="h1">YOUR NAME</Heading>
        <Heading as="h2">WEB-DESIGNER</Heading>
      </div> */}
    </Layout>
  );
};

export default Header;
