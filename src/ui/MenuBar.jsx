import styled from "styled-components";
import close from "../assets/icons/closeIcon.svg";
import menuText from "../assets/icons/menuText.svg";
import Heading from "./Heading";
import Text from "./Text";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";

const Layout = styled.div`
  width: 100%;
  height: 810px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 76px;
  align-items: center;
  .closeContainer {
    width: 100%;
    border: 1px solid black;
    height: 24px;
    display: flex;
    justify-content: end;
    img {
      cursor: pointer;
    }
  }
  .content {
    width: 262px;
    height: 262px;
    border: 1px solid black;
    display: flex;
    gap: 6px;
    span {
      display: flex;
      flex-direction: column;
      gap: 26px;
      width: 234px;
    }
  }
  .media {
    width: 298px;
    height: 118px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const MenuBar = () => {
  return (
    <Layout>
      <div className="closeContainer">
        <img src={close} />
      </div>
      <div className="content">
        <img src={menuText} />
        <span>
          <Heading type="menu-h1">HOME</Heading>
          <Heading type="menu-h1">PROJECTS</Heading>
          <Heading type="menu-h1">ABOUT</Heading>
          <Heading type="menu-h1">CONTACT</Heading>
        </span>
      </div>
      <div className="media">
        <Text type="media">your_mail@email.com</Text>

        <div>
          <Text type="media">+123 456 7890</Text>
          <span>
            <img src={insta} />
            <img src={twitter} />
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default MenuBar;
