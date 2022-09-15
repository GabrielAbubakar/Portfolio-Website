import { createGlobalStyle } from "styled-components";
import { devices } from "./mediaqueries/device";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all .2s ease;
    }

    body {
        font-family: sans-serif;
        color: ${(props) => props.theme.colors.bodyText};
        background-color: ${(props) => props.theme.colors.background};
        overflow-x: hidden;
    }

    .container {
        width: 93%;
        max-width: 1440px;
        margin-inline: auto;
        padding: 0;
        position: relative;

        @media ${devices.mobileL} {
            width: 90%;
        }
    }

    /* ::-webkit-scrollbar {
        width: 10px;
        height: 20px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.thumbscrollThumb};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.colors.thumbscrollHover};
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.thumbscrollTrack};
        //border-radius: 19px;
        box-shadow: inset 0px 0px 0px 0px #F0F0F0;
    } */
`




export default GlobalStyle
