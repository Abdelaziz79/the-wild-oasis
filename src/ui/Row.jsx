import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  ${(props) =>
    props.type === "container" &&
    css`
      margin-left: 20%;
      margin-right: 20%;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
