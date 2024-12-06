import styled from "styled-components";
import Text from "./Text";
import logo from "../assets/icons/logo.svg"

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
        <Text type="use">PROJECTS</Text>
        <Text type="use">ABOUT ME</Text>
        <Text type="use">CONTACT</Text>
      </div>
      <div className="contact">
        <img src={logo}/>
        <span>
          <Text type="use">+123 456 7890</Text>
          <Text type="use">your_mail@email.com</Text>
        </span>
      </div>
    </Layout>
  );
};

export default Footer;
