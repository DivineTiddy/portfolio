import styled from "styled-components";
import Card from "../../ui/Card";
import { Link } from "react-router";
import Button from "../../ui/Button";

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
  {
    id: 4,
    title: "Project title - Here comes the name of the Project",
    url: "Here are the Tech’s used",
    imgUrl: "Here are the Tech’s used",
  },
  {
    id: 5,
    title: "Project title - Here comes the name of the Project",
    url: "Here are the Tech’s used",
    imgUrl: "Here are the Tech’s used",
  },
  {
    id: 6,
    title: "Project title - Here comes the name of the Project",
    url: "Here are the Tech’s used",
    imgUrl: "Here are the Tech’s used",
  },
];
const Layout = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 80px 0px;
  .styled-card {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 33px;

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
const Main = () => {
  return (
    <Layout>
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
        <Link className="link" to="/contact">
          <Button content="Contact me" />
        </Link>
      </div>
    </Layout>
  );
};

export default Main;
