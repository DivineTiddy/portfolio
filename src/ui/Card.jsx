import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";
import propTypes from "prop-types";

const Layout = styled.div`
  width: 298px;
  height: 380px;
  border: 1px solid black;
  background-color: black;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  div {
    margin-left: 24px;
    margin-top: 15px;
    width: 90%;
  }
`;
const Card = ({ url, title }) => {
  return (
    <Layout>
      <div>
        <Heading as="h4">{title}</Heading>
        <Text type="use">{url}</Text>
      </div>
    </Layout>
  );
};
Card.propTypes = {
  imgUrl: propTypes.string,
  url: propTypes.string,
  title: propTypes.string,
};

export default Card;
