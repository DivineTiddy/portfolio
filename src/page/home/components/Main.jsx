import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Text from "../../../ui/Text";
import icon1 from "../../../assets/icons/icon-1.svg";
import icon2 from "../../../assets/icons/icon-2.svg";
import icon3 from "../../../assets/icons/icon-3.svg";
import icon4 from "../../../assets/icons/icon-4.svg";
import icon5 from "../../../assets/icons/icon-5.svg";
import icon6 from "../../../assets/icons/icon-6.svg";
import icon7 from "../../../assets/icons/icon-7.svg";
import icon8 from "../../../assets/icons/icon-8.svg";
import icon9 from "../../../assets/icons/icon-9.svg";
import icon10 from "../../../assets/icons/icon-10.svg";
import arrow from "../../../assets/icons/arrow.svg";

import Card from "../../../ui/Card";
import { Link } from "react-router";

const data = [
  {
    id: 1,
    title: "Project title - Here comes the name of the Project",
    url: "Here are the Tech’s used",
    imgUrl: "Here are the Tech’s used",
  },
  {
    id: 2,
    title: "Project title - Here comes the name of the Project",
    url: "Here are the Tech’s used",
    imgUrl: "Here are the Tech’s used",
  },
  {
    id: 3,
    title: "Project title - Here comes the name of the Project",
    url: "Here are the Tech’s used",
    imgUrl: "Here are the Tech’s used",
  },
];

const Layout = styled.main`
  background-color: var(--white-color);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;

  .about {
    width: 298px;
    height: auto;
    margin: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
      width: 560px;
      height: auto;
      gap: 20px;
    }
  }
  .skill {
    width: 298px;
    height: auto;
    @media (min-width: 768px) {
      width: 560px;
      height: auto;
      gap: 20px;
    }
    .skill-set {
      width: 100%;
      height: auto;
      display: grid;
      gap: 10px;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 66px;
      grid-template-columns: auto auto;
      @media (min-width: 768px) {
        grid-template-columns: auto auto auto auto auto;
        gap: 38px;
      }
      span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
  .styled-card {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;

    @media (min-width: 768px) {
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
function Main() {
  return (
    <Layout>
      <div className="about">
        <Heading as="h3">About me</Heading>
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
      <div className="skill">
        <Heading as="h3">My Skills</Heading>
        <div className="skill-set">
          <span>
            <img src={icon1} />
            <Text type="about">JavaScript</Text>
          </span>
          <span>
            <img src={icon2} />
            <Text type="about">CSS</Text>
          </span>
          <span>
            <img src={icon3} />
            <Text type="about">HTML</Text>
          </span>
          <span>
            <img src={icon4} />
            <Text type="about">React.JS</Text>
          </span>
          <span>
            <img src={icon5} />
            <Text type="about">Node.JS</Text>
          </span>
          <span>
            <img src={icon6} />
            <Text type="about">Chrome</Text>
          </span>
          <span>
            <img src={icon7} />
            <Text type="about">Figma</Text>
          </span>
          <span>
            <img src={icon8} />
            <Text type="about">NPM</Text>
          </span>
          <span>
            <img src={icon9} />
            <Text type="about">Git</Text>
          </span>
          <span>
            <img src={icon10} />
            <Text type="about">VSCode</Text>
          </span>
        </div>
      </div>
      <div className="styled-card">
        {data.map((items) => (
          <Card
            key={items.id}
            imgUrl={items.imgUrl}
            url={items.url}
            title={items.title}
          />
        ))}
      </div>
      <div className="button-container">
        <Link to="/project"><button><img src={arrow}/>All Projects</button></Link>
        <Link to="/contact"><button><img src={arrow}/>Contact me</button></Link>

      </div>
    </Layout>
  );
}

export default Main;
