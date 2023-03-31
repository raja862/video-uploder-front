import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    *{
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color:#0F0F0F;
        background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);

    }
    a{
        text-decoration: none;
        color: #fff;
    }
    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }
`;