'use client'
import React, { useState } from "react";
import Container from "../../components/container";
import { useRouter } from "next/navigation";

const Page = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const [state, setState] = useState("standby");

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setState("loading")
        const form = event.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
        const surname = (form.elements.namedItem('surname') as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
        const id_type = (form.elements.namedItem('doctype') as HTMLSelectElement).value;
        const id = parseInt((form.elements.namedItem('user_id') as HTMLInputElement).value.trim())
        // Validaciones
        if (!name) {
            setError('El nombre no puede estar vacío.');
            return;
        }
        if (!surname) {
            setError('El apellido no puede estar vacío.');
            return;
        }
        if (!id) {
            setError('El número de documento no puede estar vacío.');
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
        if (id_type === '') {
            setError('Por favor, seleccione un tipo de documento válido.');
            return;
        }

        setError('');
        

        if (error) {
            console.error('Error al registrar el usuario. Inténtelo de nuevo.');
            setState("standby")
            return;
        }

        console.log(
            `Nombre: ${name}\n` +
            `Apellido: ${surname}\n` +
            `Tipo de documento: ${id_type}\n` +
            `Número de documento: ${id}\n` +
            `Correo: ${email}\n` +
            `Teléfono: ${phone}`
        )
        try {
            const response = await fetch('manefact.vercel.app/api/add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, name, surname, id_type, email, phone })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error || 'Error al crear el usuario.');
                setState("standby")
                return;
            }

            // Redirigir o mostrar mensaje de éxito
            setState("success") // Redirigir a una página de éxito
        } catch {
            setError('Error al conectar con el servidor.');
            setState("standby")
        }
        //POST({id, name, surname,id_type, email, phone})

    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-brand-500">
            <Container className={`flex py-5 max-sm:py-3 items-center justify-center flex-col`}>
                <div className={`card bg-brand-100 rounded-2xl ${isFlipped ? "flipped" : ""}`}>
                    <div className="back w-full h-full flex justify-center items-center flex-col relative overflow-hidden">
                        {
                            state === "loading" && 
                            <div className="absolute w-full h-full top-0 left-0 bg-black/80 flex justify-center items-center z-30">
                                <div className="spinner"></div>
                            </div>
                        }
                        {
                            state === "success" && 
                            <div className="absolute w-full h-full top-0 left-0 bg-black/80 flex justify-center items-center z-30">
                                <div className="flex flex-col gap-y-2 items-center">
                                    <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-semibold font-bruno text-brand-100 mb-2">Registro exitoso!</h2>
                                    <p className="text-brand-100">Gracias por registrarte en MANEFACT, te hemos enviado un correo de confirmación.</p>
                                    <button className="btn-filled" onClick={()=>setState("standby")}>Aceptar</button>
                                </div>
                            </div>
                        }
                        <h3 className="absolute top-2 left-2 font-bruno text-base text-brand-500 font-extrabold">MANEFACT</h3>
                        <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-semibold font-bruno text-brand-500 mb-2">Pre-Registro</h2>
                        <form action="" onSubmit={handleSubmit} className="w-5/6 flex flex-col gap-y-2 items-center">
                            <input type="text" placeholder="Nombre" id="name" name="name" className="input" />
                            <input type="text" placeholder="Apellido" id="surname" name="surname" className="input" />
                            <div className="flex max-sm:w-full w-3/6 max-w-md gap-x-2">
                                <select className="py-2 px-4 border-2 border-x-transparent border-t-transparent border-b-brand-500 bg-transparent focus:rounded-xl border-brand-500 focus:outline-none focus:border-brand-500" name="tipodoc" id="doctype" defaultValue="">
                                    <option value="" disabled>Tipo</option>
                                    <option value="CC">CC</option>
                                    <option value="CE">CE</option>
                                    <option value="PE">PE</option>
                                    <option value="NIT">NIT</option>
                                    <option value="RUT">RUT</option>
                                </select>
                                <input type="number" id="user_id" name="user_id" placeholder="Numero de documento" className="input flex-grow" />
                            </div>
                            <input type="email" placeholder="Correo" id="email" name="email" className="input" />
                            <input type="tel" placeholder="Telefono" id="phone" name="phone" className="input" />
                            {error && <p className="text-red-500">{error}</p>}
                            <button className="btn-filled mt-3" id="send_form" name="send_form">Registrarse</button>
                        </form>
                        <div className="flex w-full items-stretch justify-evenly gap-x-8 mt-6 absolute bottom-4">
                            <button className="btn-outline" onClick={()=>router.push("/")}>Cancelar</button>
                            <button className="btn-filled" onClick={handleFlip}>Dar Vuelta</button>
                        </div>
                    </div>
                    <div className="front w-full h-full flex justify-center items-center flex-col gap-y-4">
                        <h3 className="absolute top-2 left-2 font-bruno text-base text-brand-500 font-extrabold">MANEFACT</h3>
                        <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-semibold font-bruno text-brand-500 mb-2">Manefact</h2>
                        <p className="w-5/6 text-lg text-balance">A la hora de hacer el pre-registro seras de los primeros en acceder a todos los beneficios, ya sea como cliente o como dueño de un comercio. Serás participe de un avance tecnologico vital en el país y tus esfuerzos se verán reducidos gracias a la automatización y la técnología. Que esperas, unete para recibir noticias, enterarte de las fechas de lanzamiento y muchos beneficios más.</p>
                        <button className="btn-filled" onClick={handleFlip}>Continuar</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Page;