import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }


    // reset

    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    p{
        margin: 0;
    }

    
`