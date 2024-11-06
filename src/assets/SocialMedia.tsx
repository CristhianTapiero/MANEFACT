import { BsGithub, BsLinkedin, BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";

interface Props {
    url: string;
    username: string;
    className ?: string;
}
export const Github = ({ url, username, className }: Props) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`social-button text-gray-100 bg-gray-900 hover:bg-gray-800 ${className}`}>
        <BsGithub/> {username}
    </a>
);
export const Linkedin = ({ url, username, className }: Props) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`social-button text-gray-100 bg-blue-600 hover:bg-blue-500 ${className}`}>
        <BsLinkedin/> {username}
    </a>
);
export const Instagram = ({ url, username, className }: Props) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`social-button text-gray-100 bg-gradient-to-r from-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-400 ${className}`}>
        <BsInstagram/> {username}
    </a>
);
export const Facebook = ({ url, username, className }: Props) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`social-button text-gray-100 bg-blue-800 hover:bg-blue-700 ${className}`}>
        <BsFacebook/> {username}
    </a>
);
export const Twitter = ({ url, username, className }: Props) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`social-button text-gray-100 bg-gray-900 hover:bg-gray-800 ${className}`}>
        <BsTwitterX/> {username}
    </a>
);
