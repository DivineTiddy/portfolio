import {  Outlet,  } from "react-router";
import styled from "styled-components";

import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

import MenuBar from "./ui/MenuBar";
import { UseValue } from "./context/UseContext";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { open } = UseValue();
  return (
    <Layout>
      {open ? <MenuBar /> : ""}
      <Nav />
      <Outlet/>
      <Footer />
    </Layout>
  );
}

export default App;
