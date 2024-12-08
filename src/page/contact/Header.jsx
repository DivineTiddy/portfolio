import styled from "styled-components";
import Heading from "../../ui/Heading";


const Layout = styled.header`
  width: 100%;
  height: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    width: 298px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    @media (min-width: 768px) {
      width: 534px;
      height: 142px;
      gap: 4px;

    }
  }
`;
const Header = () => {
  return (
    <Layout>
      <div className="hero-content">
        <Heading type="contact-h1">CONTACT ME</Heading>
        <Heading as="h2">SAY HELLO TO ME</Heading>
      </div>
    </Layout>
  );
};

export default Header;
