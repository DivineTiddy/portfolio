import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const Layout = styled.div`
  width: 100%;
  height: auto;
`;
const Project = () => {
  return (
    <Layout>
      <Header />
      <Main/>
    </Layout>
  );
};

export default Project;
