import styled from "styled-components";
import Text from "../../ui/Text";
import Form from "../../ui/Form";

const Layout = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 80px 0px;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
const Main = () => {
  return (
    <Layout>
      <div className="container">
        <Text as="h3">Contact me</Text>
        <Form />
      </div>
    </Layout>
  );
};

export default Main;
