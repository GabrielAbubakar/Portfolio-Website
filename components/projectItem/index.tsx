import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ProjectBox } from "../sections/Work/Work.styled";

const CTAButton = styled.a`
    display: inline-flex;
    margin-top: 1.5rem;
    padding: 0.8rem 1.8rem;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.bodyText};
    border: 2px solid ${(props) => props.theme.colors.bodyText};
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${(props) => props.theme.colors.bodyText};
        color: ${(props) => props.theme.colors.background};
    }
`;


interface ProjectProps {
    link?: string,
    image: StaticImageData | StaticImageData[],
    alt: string,
    title: string,
    details: string,
    color?: string
}

const ProjectItem = ({ link, image, alt, title, details, color }: ProjectProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const isArray = Array.isArray(image);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isArray || isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const arr = image as StaticImageData[];
                const nextIndex = prev + itemsPerSlide;
                return nextIndex >= arr.length ? 0 : nextIndex;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [image, isArray, isHovered, itemsPerSlide]);

    const currentImage = isArray ? (image as StaticImageData[])[currentIndex] : image as StaticImageData;

    const itemVariant = {
        hidden: { opacity: 0, x: 100, },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 3,
                type: "spring",
            }
        },
        exiting: { opacity: 0, x: -100, scale: 3 },
        hover: {
            y: -4,
            transition: {
                duration: .2,
                type: "spring",
            }
        }
    }

    return (
        <ProjectBox
            key={alt}
            initial="hidden"
            whileInView="visible"
            // animate="visible"
            // exit="exiting"
            whileHover="hover"
            viewport={{ once: true }}
            variants={itemVariant}
            color={color}
        >
            <figure 
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isArray ? (
                    <div style={{ display: 'flex', width: '100%', height: '350px', gap: '15px' }}>
                        {Array.from({ length: itemsPerSlide }).map((_, i) => (
                            <div key={i} style={{ position: 'relative', width: `${100 / itemsPerSlide}%`, height: '100%' }}>
                                <Image 
                                    src={(image as StaticImageData[])[(currentIndex + i) % (image as StaticImageData[]).length]} 
                                    alt={alt} 
                                    placeholder="blur" 
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Image src={currentImage} alt={alt} placeholder="blur" />
                )}
                {isArray && (
                    <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                        {Array.from({ length: Math.ceil((image as StaticImageData[]).length / itemsPerSlide) }).map((_, dotIdx) => {
                            const pageIndex = dotIdx * itemsPerSlide;
                            const isActive = dotIdx === Math.floor(currentIndex / itemsPerSlide);
                            return (
                                <span 
                                    key={dotIdx} 
                                    style={{ 
                                        width: '10px', 
                                        height: '10px', 
                                        borderRadius: '50%', 
                                        backgroundColor: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                                        transition: 'background-color 0.3s',
                                        cursor: 'pointer'
                                    }} 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        setCurrentIndex(pageIndex); 
                                    }}
                                />
                            )
                        })}
                    </div>
                )}
            </figure>
            <div>
                <h2>
                    {title}
                    <span>

                    </span>
                </h2>
                <p>{details}</p>
                {link && (
                    <CTAButton href={link} target="_blank" rel="noreferrer">
                        View Project
                    </CTAButton>
                )}
            </div>
        </ProjectBox>
    )
}

export default ProjectItem;