import Image, { StaticImageData } from "next/image";
import { ProjectBox } from "../sections/Work/Work.styled";


interface ProjectProps {
    link: string,
    image: StaticImageData,
    alt: string,
    title: string,
    details: string
}

const ProjectItem = ({ link, image, alt, title, details }: ProjectProps) => {

    return (
        <ProjectBox>
            <a href={link} target="_blank" rel="noreferrer">
                <figure>
                    <Image src={image} alt={alt} width="1080" height="561" />
                </figure>
            </a>
            <div>
                <h3>
                    {title}
                    <span>

                    </span>
                </h3>
                <p>{details}</p>
            </div>
        </ProjectBox>
    )
}

export default ProjectItem;