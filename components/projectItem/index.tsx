import Image, { StaticImageData } from "next/image";
import { ProjectBox } from "../sections/Work/Work.styled";


interface ProjectProps {
    link: string,
    image: StaticImageData,
    alt: string,
    title: string,
    details: string,
    color?: string
}

const ProjectItem = ({ link, image, alt, title, details, color }: ProjectProps) => {

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
            // whileInView="visible"
            animate="visible"
            exit="exiting"
            whileHover="hover"
            // viewport={{ once: true }}
            variants={itemVariant}
            color={color}
        >
            <a href={link} target="_blank" rel="noreferrer">
                <figure>
                    <Image src={image} alt={alt} placeholder="blur" />
                </figure>
            </a>
            <div>
                <h2>
                    {title}
                    <span>

                    </span>
                </h2>
                <p>{details}</p>
            </div>
        </ProjectBox>
    )
}

export default ProjectItem;