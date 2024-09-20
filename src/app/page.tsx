'use client'
import React, { useState } from "react";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";
import Container from "../components/container";
type SocialMedia = {
    icon: React.ReactNode;
    name: string;
    link: string;
};

const socialMedia: SocialMedia[] = [
    { icon: <BsFacebook className="text-2xl max-sm:text-lg" />, name: "Facebook", link: "https://www.facebook.com/equilibrium" },
    { icon: <BsInstagram className="text-2xl max-sm:text-lg" />, name: "Instagram", link: "https://www.instagram.com/equilibrium" },
    { icon: <BsTwitterX className="text-2xl max-sm:text-lg" />, name: "Twitter (X)", link: "https://www.equilibrium.com" },
];

const App: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-brand-500">
            <Container className={`flex py-5 max-sm:py-3 items-center justify-center flex-col`}>
                <div className={`card bg-brand-100 rounded-2xl ${isFlipped ? "flipped" : ""}`}>
                    <div className="front w-full h-full flex justify-center items-center flex-col">
                        <h1 className="text-7xl max-sm:text-5xl max-md:text-6xl font-semibold font-bruno text-brand-500 mb-2">MANEFACT</h1>
                        <p className="font-light max-sm:text-sm w-4/6 text-center">Tus facturas electronicas al alcance de la mano, rápido y sin complique.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <button className="btn-outline" onClick={handleFlip}>Sobre Nosotros</button>
                            <button className="btn-filled">Registrarse</button>
                        </div>
                    </div>
                    <div className="back w-full h-full flex justify-center items-center flex-col gap-y-4">
                        <h3 className="absolute top-2 left-2 font-bruno text-base text-brand-500 font-extrabold">MANEFACT</h3>
                        <h2 className="text-7xl max-sm:text-5xl max-md:text-6xl font-semibold font-bruno text-brand-500 mb-2">Siguenos</h2>
                        <ul className="flex flex-col gap-y-2">
                            {socialMedia.map((item, index) => (
                                <li key={index} className="flex items-center space-x-4 hover:underline text-brand-500">
                                    {item.icon}
                                    <a href={item.link} className="text-lg max-sm:text-base">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="btn-outline" onClick={handleFlip}>Dar vuelta</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default App;