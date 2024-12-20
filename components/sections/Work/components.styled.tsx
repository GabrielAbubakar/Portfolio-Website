import styled from "styled-components";

const TabsRow = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0 3rem 0;
`

const TabsButton = styled.h3<{ activeCat: string, cat: string }>`
    padding: .5rem 1rem;
    cursor: pointer;
    color: ${(props) => {
        if (props.activeCat == props.cat) {
            return props.theme.colors.bodyText
        } else {
            return '#767676'
        }
    }};

    &:hover {
        color: ${(props) => props.theme.colors.bodyText};
    }

    &:first-of-type {
        border-right: 2px solid ${(props) => props.theme.colors.bodyText};
    }
`

const MoreButton = styled.button`
    position: relative;
    padding: .9rem 1.5rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.bodyText};
    border-radius: 10px;
    color: ${(props) => props.theme.colors.bodyText};
    background-color: ${(props) => props.theme.colors.background};
    transition: all .3s ease-in-out;

    &:hover  {
        transform: translateY(-4px);
        color: ${(props) => props.theme.colors.background};
    }

    &:hover::after {
        width: 100%;
        background-color: ${(props) => props.theme.colors.bodyText};
    }

    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 1%;
        border-radius: 10px;
        overflow: hidden;
    }
`

const DisabledButton = styled.button`
    cursor: not-allowed;
    position: relative;
    padding: .9rem 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.bodyText};
    border-radius: 10px;
    color: ${(props) => props.theme.colors.bodyText};
    background-color: ${(props) => props.theme.colors.background};
    transition: all .3s ease-in-out;
`


export {
    MoreButton,
    TabsButton,
    TabsRow,
    DisabledButton
}