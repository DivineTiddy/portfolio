import styled from "styled-components";
import Text from "./Text";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router";

const Layout = styled.footer`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .content {
    width: 298px;
    height: 22px;
    display: flex;
    gap: 29px;
    .link {
      text-decoration: none;
    }
  }
  .contact {
    width: 239px;
    height: 58px;
    display: flex;
    gap: 21px;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;
const Footer = () => {
  return (
    <Layout>
      <div className="content">
        <Link className="link" to="/project">
          <Text type="use">PROJECTS</Text>
        </Link>
        <Link className="link" to="/about">
          <Text type="use">ABOUT ME</Text>
        </Link>
        <Link className="link" to="/contact">
          <Text type="use">CONTACT</Text>
        </Link>
      </div>
      <div className="contact">
        <img src={logo} />
        <span>
          <Text type="use">+234 814 2809 072</Text>
          <Text type="use">divinetidy@email.com</Text>
        </span>
      </div>
    </Layout>
  );
};

export default Footer;
