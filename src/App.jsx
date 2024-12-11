import { createBrowserRouter, RouterProvider } from "react-router";
import styled from "styled-components";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import Project from "./page/project/Project";
import About from "./page/about/About";
import MenuBar from "./ui/MenuBar";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About/> ,
  },
]);
function App() {
  return (
    <Layout>
      <MenuBar/>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </Layout>
  );
}

export default App;
