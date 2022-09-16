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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 3,
                type: "spring",
            }
        },
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
            // initial="hidden"
            // whileInView="visible"
            // whileHover="hover"
            // viewport={{ once: true }}
            // variants={itemVariant}
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