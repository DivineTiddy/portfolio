import styled from "styled-components";
import burger from "../assets/icons/burger.svg";
import logo from "../assets/icons/logo.svg";

const Layout = styled.nav`
  width: 90%;
  height: auto;
  padding: 20px 0px;
  background-color: var(--black-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    cursor: pointer;
  }
`;
const Nav = () => {
  return (
    <Layout>
      <img src={logo} />
      <img src={burger} />
    </Layout>
  );
};

export default Nav;
