import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: normal;
      font-size: 96px;
      line-height: 80%;
      color: var(--white-color);
      /* width: 298px; */
      text-align: center;
      font-family: "League Gothic", sans-serif;

    `}
    ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: normal;
      font-size: 32px;
      line-height: 29px;
      letter-spacing: 16px;
      color: var(--white-color);
      /* width: 298px; */
      text-align: center;
      font-family: "League Spartan", sans-serif;

    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: bold;
      font-size: 24px;
      line-height: 22px;
      color: var(--background-color);
      /* width: 298px; */
      font-family: "League Spartan", sans-serif;
      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 29px;
      }

    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      color: var(--white-color);
      font-family: "Roboto", serif;

    
    `}
    padding:0px;
    margin:0px;
    ` 

    export default Heading