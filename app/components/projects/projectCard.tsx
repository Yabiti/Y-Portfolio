import Image from "next/image"
import { MdDescription } from "react-icons/md"


interface projectCardprops {
    imagePath: string,
    title: string,
    description: string
}

export default function ProjectCard({imagePath,
    title,
    description
    }:projectCardprops){
    return(
        <div>
            <Image 
            src={imagePath}
            alt="title"
            height={800} width={600}
            className="rounded-lg"
            />
            <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">
                {title}
            </p>
            <p className="font-medium text-gray-400">{description}</p>
        </div>
    )

}