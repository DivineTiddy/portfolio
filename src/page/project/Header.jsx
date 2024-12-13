import styled from "styled-components"
import Heading from "../../ui/Heading"


const Layout = styled.div`
    width: 100%;
  height: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
    .hero-content {
    width: 298px;
    height: 226.69px;
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
`
const Header = () => {
  return (
    <Layout>
        <div className="hero-content">
        <Heading as="h1">MY PROJECTS</Heading>
        <Heading as="h2">MADE WITH LOVE</Heading>
      </div>
    </Layout>
  )
}

export default Header