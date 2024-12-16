import styled from "styled-components";
import burger from "../assets/icons/burger.svg";
import logo from "../assets/icons/logo.svg";
import { UseValue } from "../context/UseContext";
import { Link } from "react-router";

const Layout = styled.nav`
  width: 90%;
  height: auto;
  padding: 20px 0px;
  background-color: var(--black-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
const Nav = () => {
  const { dispatch } = UseValue();
  function HandleClick() {
    dispatch({ type: "open" });
  }
  return (
    <Layout>
      <Link to="/">
        <img src={logo} />
      </Link>

      <img onClick={HandleClick} src={burger} />
    </Layout>
  );
};

export default Nav;
