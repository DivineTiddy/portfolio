import styled, { css } from "styled-components";

const Text = styled.p`
  ${(props) =>
    props.type === "about" &&
    css`
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: var(--background-color);
      font-family: "Roboto", serif;

    
    `}
    ${(props) =>
    props.type === "use" &&
    css`
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: var(--white-color);
      font-family: "Roboto", serif;

    
    `}
    padding:0px;
    margin:0px;
    ` 

    export default Text