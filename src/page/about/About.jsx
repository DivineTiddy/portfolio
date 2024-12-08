import styled from "styled-components";
import Main from "./Main";
import Header from "./Header";

const Layout = styled.div`
  width: 100%;
  height: auto;
`;
const About = () => {
  return (
    <Layout>
        <Header/>
        <Main/>
    </Layout>
  )
}

export default About