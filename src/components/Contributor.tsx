import { Github,Linkedin } from "@/assets/SocialMedia";
interface Props {
    name: string;
    role: string;
    img: string;
    description: string;
    github: {
        url: string;
        username: string;
    }
    linkedin: {
        url: string;
        username: string;
    }
    className?: string;
}

const Contributor = ({ name, role, img, description, github, linkedin, className }: Props) => (
    <div className={`flex flex-col items-center ${className}`}>
        <img className="rounded-full w-32 h-32" src={img} alt={name} />
        <h2 className="text-2xl font-bold mt-2">{name}</h2>
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="text-center mt-2 text-balance">{description}</p>
        <div className="flex justify-center mt-2 gap-x-2">
            <Github url={github.url} username={github.username} className="w-max text-sm"/>
            <Linkedin url={linkedin.url} username={linkedin.username} className="w-max text-sm"/>
        </div>
    </div>
);

export default Contributor;