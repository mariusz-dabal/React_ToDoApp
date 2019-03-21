import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Just+Another+Hand');

    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background-color: #fff;
        font-family: 'Just Another Hand', cursive;
    }

    p {
        font-size: 2em;
        text-align: center;
    }
`;

export default GlobalStyle;
