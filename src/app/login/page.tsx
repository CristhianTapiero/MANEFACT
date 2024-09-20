'use client'
import React, { useState } from "react";
import Container from "../../components/container";

const Page = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [error, setError] = useState('');


    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
        const surname = (form.elements.namedItem('surname') as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
        const selectValue = (form.elements.namedItem('doctype') as HTMLSelectElement).value;

        // Validaciones
        if (!name) {
            setError('El nombre no puede estar vacío.');
            return;
        }
        if (!surname) {
            setError('El apellido no puede estar vacío.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('El email no es válido.');
            return;
        }
        if (phone.length !== 10) {
            setError('El teléfono debe tener 10 caracteres.');
            return;
        }
        if (selectValue === '0') {
            setError('Por favor, seleccione un tipo de documento válido.');
            return;
        }

        setError('');
        

        if (error) {
            console.error('Error al registrar el usuario. Inténtelo de nuevo.');
            return;
        }
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-brand-500">
            <Container className={`flex py-5 max-sm:py-3 items-center justify-center flex-col`}>
                <div className={`card bg-brand-100 rounded-2xl ${isFlipped ? "flipped" : ""}`}>
                    <div className="front w-full h-full flex justify-center items-center flex-col">
                        <h3 className="absolute top-2 left-2 font-bruno text-base text-brand-500 font-extrabold">MANEFACT</h3>
                        <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-semibold font-bruno text-brand-500 mb-2">Pre-Registro</h2>
                        <form action="" onSubmit={handleSubmit} className="w-5/6 flex flex-col gap-y-2 items-center">
                            <input type="text" placeholder="Nombre" id="name" name="name" className="input" />
                            <input type="text" placeholder="Apellido" id="surname" name="surname" className="input" />
                            <div className="flex max-sm:w-full w-3/6 max-w-md gap-x-2">
                                <select className="py-2 px-4 border-2 border-x-transparent border-t-transparent border-b-brand-500 bg-transparent focus:rounded-xl border-brand-500 focus:outline-none focus:border-brand-500" name="tipodoc" id="doctype" defaultValue={0}>
                                    <option value="0">Tipo</option>
                                    <option value="1">CC</option>
                                    <option value="2">CE</option>
                                    <option value="3">PE</option>
                                    <option value="4">NIT</option>
                                    <option value="5">RUT</option>
                                </select>
                                <input type="number" id="user_id" name="user_id" placeholder="Numero de documento" className="input flex-grow" />
                            </div>
                            <input type="email" placeholder="Correo" id="email" name="email" className="input" />
                            <input type="tel" placeholder="Telefono" id="phone" name="phone" className="input" />
                            {error && <p className="text-red-500">{error}</p>}
                            <button className="btn-filled mt-3" id="send_form" name="send_form">Registrarse</button>
                        </form>
                        <div className="flex w-full items-stretch justify-evenly gap-x-8 mt-6 absolute bottom-4">
                            <button className="btn-outline">Volver</button>
                            <button className="btn-filled" onClick={handleFlip}>Ingresar</button>
                        </div>
                    </div>
                    <div className="back w-full h-full flex justify-center items-center flex-col gap-y-4">
                        <h3 className="absolute top-2 left-2 font-bruno text-base text-brand-500 font-extrabold">MANEFACT</h3>
                        <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-semibold font-bruno text-brand-500 mb-2">Ingresar</h2>
                        <form action="" className="w-5/6 flex flex-col gap-y-2 items-center">
                            <input type="email" placeholder="Correo" className="input" />
                            <input type="password" placeholder="Contraseña" className="input" />
                            <div className="flex gap-x-2 items-center justify-center my-3">
                                <input type="checkbox" className="size-4" />
                                <label htmlFor="" className="text-brand-500">Eres doctor?</label>
                            </div>
                            <button className="btn-filled">Ingresar</button>
                        </form>
                        <div className="flex gap-x-8 mt-6 w-full items-center justify-center">
                            <button className="btn-outline">Inicio</button>
                            <button className="btn-filled" onClick={handleFlip}>Registrarse</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Page;