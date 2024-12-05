import styled from "styled-components"
import Header from "./components/Header"
import Main from "./components/Main"
const Layout = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid black;

`
const Home = () => {
  return (
    <Layout>
        <Header/>
        <Main/>
    </Layout>
  )
}

export default Home