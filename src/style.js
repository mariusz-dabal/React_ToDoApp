import styled, { css } from "styled-components";

const AppWrapper = styled.div`
  width: 90%;
  height: 90vh;
  margin: 5vh auto 5vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #faf2ad;
  overflow: auto;

  @media screen and (min-width: 600px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 992px) {
    width: 40%;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 4em;
`;

const Input = styled.input`
  width: 60%;
  display: block;
  margin: 0 auto;
  border: none;
  border-bottom: 1px dotted #000;
  background: #faf2ad;
  font-family: "Just Another Hand", cursive;
  font-size: 1.5em;
  outline: none;
`;

const TodosDiv = styled.div`
  font-size: 1.7em;
  margin: 0 5%;
  padding: 2px;
`;

const TodoDiv = styled.div`
  border-bottom: 0.5px dotted #000;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  padding: 4px;
`;

const TodoTitle = styled.span`
  margin-right: auto;

  ${props =>
    props.complete &&
    css`
      color: red;
    `}
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: #faf2ad;
  font-family: "Just Another Hand", cursive;
  font-size: 0.9em;
  padding: 0 8px 0;
`;

export { AppWrapper, Heading, Input, TodosDiv, TodoDiv, TodoTitle, Button };
