import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { devices } from '../styled/mediaqueries/device';


export const ButtonStyled = styled(motion.div)`
    display: block;
    background-color: ${(props) => props.theme.colors.buttonBackground};
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 10;
    border-radius: 50%;

    @media ${devices.mobileL} {
        width: 3rem;
        height: 3rem;
    }

    @media ${devices.mobileL} {
        bottom: 2rem;
        right: 2rem;
        width: 2.3rem;
        height: 2.3rem;
    }

    span {
        width: 100%;
        height: 100%;
    }

    svg {
        border: 0;
        stroke: ${(props) => props.theme.colors.buttonStroke};
    }
`

const ToTopButton: React.FunctionComponent = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.onscroll = toggleVisibility;
    })

    return (
        <AnimatePresence>
            {isVisible && (
                <ButtonStyled onClick={() => scrollToTop()}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: [50, -20, 0], transition: { duration: .1 } }}
                    exit={{ opacity: [1, .5, 0], x: [0, -20, 50] }}
                >
                    <span>
                        {/* <img src={UpArrow} alt="up-arrow" className="top-icon" /> */}
                        <svg id="Raw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="svg">
                            <rect width="256" height="256" fill="none" stroke='transparent' />
                            <circle cx="128" cy="128" r="96" fill="none" stroke="" strokeMiterlimit="10" strokeWidth="24" />
                            <polyline points="164 144 128 104 92 144" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
                        </svg>
                    </span>
                </ButtonStyled>
            )}
        </AnimatePresence>
    )
}

export default ToTopButton;