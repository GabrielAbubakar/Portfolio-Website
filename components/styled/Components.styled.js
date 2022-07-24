import styled from "styled-components";
import { devices } from "./mediaqueries/device";

export const Header = styled.h2`
    font-size: 6rem;
    font-weight: 500;
    margin-bottom: 5rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.bodyText};
`