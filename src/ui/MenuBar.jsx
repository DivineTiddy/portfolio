import styled from "styled-components";
import close from "../assets/icons/closeIcon.svg";
import menuText from "../assets/icons/menuText.svg";
import Heading from "./Heading";
import Text from "./Text";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";
import { UseValue } from "../context/UseContext";
import { Link } from "react-router";

const Layout = styled.div`
  position: fixed;
  width: 100%;
  height: 830px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 76px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 170px;
  }

  .contentAndMediaContainer {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 76px;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: end;
    }
  }
  .closeContainer {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: end;
    margin-top: 60px;
    img {
      cursor: pointer;
      margin: 0px 37px;
    }
  }
  .content {
    width: 262px;
    height: 262px;
    display: flex;
    gap: 6px;
    @media (min-width: 768px) {
      align-items: center;
    }
    
    span {
      display: flex;
      flex-direction: column;
      gap: 26px;
      width: 234px;
      .link{
        text-decoration: none;
      }
    }
  }
  .media {
    width: 298px;
    height: 118px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
const MenuBar = () => {
  const { dispatch } = UseValue();
  function HandleClick() {
    dispatch({ type: "close" });
  }
  
  return (
    <Layout>
      <div className="closeContainer">
        <img onClick={HandleClick} src={close} />
      </div>
      <div className="contentAndMediaContainer">
        <div className="content">
          <img src={menuText} />
          <span>
            <Link className="link" to="/">
              <Heading onClick={HandleClick}  type="menu-h1">HOME</Heading>
            </Link>
            <Link  className="link" to="/project">
              <Heading onClick={HandleClick}  type="menu-h1">PROJECTS</Heading>
            </Link>
            <Link  className="link" to="/about">
              <Heading onClick={HandleClick}  type="menu-h1">ABOUT</Heading>
            </Link>
            <Link  className="link" to="/contact">
              <Heading onClick={HandleClick}  type="menu-h1">CONTACT</Heading>
            </Link>
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
      </div>
    </Layout>
  );
};

export default MenuBar;
