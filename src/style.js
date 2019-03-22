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
  margin-top: 2%;
  text-align: center;
  font-size: 4em;
`;

const Form = styled.form`
  margin: 2rem auto;
  text-align: center;
`;

const FormEdit = styled(Form)`
  display: none;
  margin: 0;
  padding: 0;
  margin-right: auto;

  ${props =>
    props.edit &&
    css`
      display: inline-block;
    `}
`;

const Input = styled.input`
  width: 60%;
  border: none;
  border-bottom: 1px dotted #000;
  background: #faf2ad;
  font-family: "Just Another Hand", cursive;
  font-size: 1.5em;
  outline: none;
`;

const InputEdit = styled(Input)`
  width: 100%;
  font-size: 1.7rem;
  border: none;
  padding: 0;
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
    props.completed &&
    css`
      text-decoration: line-through;
    `}

  ${props =>
    props.edit &&
    css`
      display: none;
    `}
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: #faf2ad;
  font-family: "Just Another Hand", cursive;
  font-size: 1.2rem;
  padding: 0 8px 0;
  cursor: pointer;
  transition: color 0.3s ease-in;

  :active {
    color: lightgray;
  }
`;

const SubmitButton = styled(Button)`
  font-size: 2rem;
`;

export {
  AppWrapper,
  Heading,
  Form,
  FormEdit,
  Input,
  InputEdit,
  TodosDiv,
  TodoDiv,
  TodoTitle,
  Button,
  SubmitButton
};
