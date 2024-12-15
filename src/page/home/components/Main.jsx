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


import Card from "../../../ui/Card";
import { Link } from "react-router";
import Button from "../../../ui/Button";

const data = [
  {
    id: 1,
    title: " News Portal",
    url: "React , Styled Components , API , React slick",
    imgUrl: "src/assets/image/Macbook-Air-localhost (2).png",

  },
  {
    id: 2,
    title: "Crypto Currency Chart",
    url: "React , Lightweight Chart , Styled components , API",
    imgUrl: "src/assets/image/Macbook-Air-localhost (3).png",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "React , Framer-Motion , Styled Components",
    imgUrl: "src/assets/image/Macbook-Air-localhost (4).png",
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
    .link {
      text-decoration: none;
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
          I am a skilled React frontend developer with a passion for creating
          intuitive and responsive user interfaces. My expertise lies in
          building efficient, reusable components and delivering seamless user
          experiences. I have a strong foundation in JavaScript, modern ES6+
          features, and state management libraries like Redux or Context API.
          I’m experienced in working with APIs, handling dynamic data, and
          implementing responsive designs using frameworks like TailwindCSS
          . I’m committed to writing clean, maintainable code and
          staying updated with the latest trends in frontend development.
          Collaboration, problem-solving, and attention to detail drive my work
          in crafting engaging digital solutions.
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
        <Link className="link" to="/project">
          <Button content="All Projects" />
        </Link>
        <Link className="link" to="/contact">
          <Button content="Contact me" />
        </Link>
      </div>
    </Layout>
  );
}

export default Main;
