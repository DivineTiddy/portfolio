import styled from "styled-components";
import Card from "../../ui/Card";
import { Link } from "react-router";
import Button from "../../ui/Button";
import image1 from "../../../public/image/Macbook-Air-fitness-divine.vercel.app.png";
import image2 from "../../../public/image/Macbook-Air-localhost (2).png";
import image3 from "../../../public/image/Macbook-Air-localhost (4).png";
import image4 from "../../../public/image/Macbook-Air-divine-roiiade.vercel.app.png";
import image5 from "../../../public/image/Macbook-Air-localhost (3).png";

const data = [
  {
    id: 1,
    title: "FlexQuest",
    url: "React , Express , Node.js , Mongodb ,  React Router , Axios",
    imgUrl: image1,
    link:"https://fitness-divine.vercel.app/",
    code:"https://github.com/DivineTiddy/fitness"
  },
  {
    id: 2,
    title: " News Portal",
    url: "React , Styled Components , API , React slick",
    imgUrl: image2,
    link:"https://hot-topic.onrender.com",
    code: "https://github.com/DivineTiddy/hot-topic",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "React , Framer-Motion , Styled Components",
    imgUrl: image3,
    link: "https://divine-u66h.onrender.com",
    code: "https://github.com/DivineTiddy/portfolio",
  },
  {
    id: 4,
    title: "Rollade",
    url: "React , Tailwind css",
    imgUrl: image4,
    link:"https://divine-roiiade.vercel.app/",
    code:"https://github.com/DivineTiddy/Roiiade"
  },
  {
    id: 5,
    title: "Crypto Currency Chart",
    url: "React , Lightweight Chart , Styled components , API",
    imgUrl: image5,
    link: "https://candlestick-wf42.onrender.com",
    code: "https://github.com/DivineTiddy/candlestic",
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
            link={items.link}
            code={items.code}
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
