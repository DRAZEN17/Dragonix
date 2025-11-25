import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }


    body, html {
        margin: 0;
        padding: 0;
        background-color: #000000ff; /* Match your Homepage background */
        overflow-x: hidden;
}

        &::-webkit-scrollbar-thumb{
            background-color: #239452ff;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #ff0000ff;
        }
    }
`;


export default GlobalStyle;