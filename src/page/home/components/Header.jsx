import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { motion } from "motion/react";
import Button from "../../../ui/Button";

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
    a{
      text-decoration: none;
    }
    @media (min-width: 768px) {
      width: 534px;
      height: 142px;
      gap: 4px;
      align-items: center;
    }
  }
`;
const link = "https://flowcv.com/resume/vs0fsn53f1";
const Header = () => {
  return (
    <Layout>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="hero-content"
      >
        <Heading as="h1">DIVINE</Heading>
        <Heading as="h2">FRONTEND-DEVELOPER</Heading>
        <a href={link}>
          <Button content="DOWNLOAD RESUME" />
        </a>
      </motion.div>
    </Layout>
  );
};

export default Header;
