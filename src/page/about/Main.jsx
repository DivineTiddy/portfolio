import styled from "styled-components";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import { Link } from "react-router";
import Button from "../../ui/Button";

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
const Main = () => {
  return (
    <Layout>
      <div className="about">
        <Heading as="h3">My Job Experience</Heading>
        <Text type="about">
          During my internship at Thyncity, I contributed to the development of
          dynamic and responsive web applications as part of the frontend team.
          My key responsibilities included:
          <ul>
            <li>
              Building and maintaining reusable React components to enhance code
              efficiency and maintainability.
            </li>
            <li>
              Collaborating with designers and backend developers to integrate
              user-friendly interfaces and seamless APIs.
            </li>
            <li>
              Debugging and optimizing web applications for better performance
              and user experience.
            </li>
            <li>
              Implementing modern tools and libraries like React Router, Axios,
              and TailwindCSS to enhance functionality and design.
            </li>
            <li>
              Gaining hands-on experience with version control systems like Git
              and working in an Agile development environment.
            </li>
          </ul>
          This experience honed my technical skills in React development and
          taught me the importance of teamwork, problem-solving, and delivering
          high-quality results within deadlines.
        </Text>
      </div>
      <div className="about">
        <Heading as="h3">My Background</Heading>
        <Text type="about">
          I am currently a student at the University of Calabar in Nigeria,
          where I am pursuing my academic and professional development. Living
          in Nigeria has shaped my perspective and adaptability, equipping me
          with a strong work ethic and a passion for learning. My journey as a
          student has inspired me to explore technology, particularly frontend
          development, where I aim to create impactful digital solutions.
          Balancing my studies with hands-on projects and an internship at
          Thyncity has provided me with real-world experience and the skills to
          grow as a developer.
        </Text>
      </div>
      <div className="button-container">
        <Link className="link" to="/contact">
          <Button content="Contact me" />
        </Link>
      </div>
    </Layout>
  );
};

export default Main;
