import { createBrowserRouter, RouterProvider } from "react-router";
import styled from "styled-components";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

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
]);
function App() {
  return (
    <Layout>
      <Nav/>
      <RouterProvider router={router} />
      <Footer/>
    </Layout>
  );
}

export default App;
