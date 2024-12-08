import styled from "styled-components";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import arrow from "../../assets/icons/arrow.svg"

const Layout = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  .about {
    width: 298px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
      width: 721px;
      height: auto;
      gap: 20px;
    }
  }
  .button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 50px 0px;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      margin-top: 50px;
    }

    button {
      width: 298px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      line-height: 19px;
      font-family: "Roboto", serif;
      background-color: var(--ashe-color);
      border: none;
      cursor: pointer;
      @media (min-width: 768px) {
        width: 240px;
      }
    }
  }
`;
const Main = () => {
  return (
    <Layout>
      <div className="about">
        <Heading as="h3">My Background</Heading>
        <Text type="about">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </Text>
      </div>
      <div className="about">
        <Heading as="h3">My Hobbies and Interests</Heading>
        <Text type="about">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </Text>
      </div>
      <div className="button-container">
        <button><img src={arrow}/>Contact me</button>
      </div>
    </Layout>
  );
};

export default Main;
