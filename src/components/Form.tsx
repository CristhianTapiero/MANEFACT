import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(name, email, password);
    };

    return (
        <form onSubmit={handleSubmit} className='mt-5 border-2 border-contrast rounded-xl flex flex-col w-4/6 max-w-xl self-center h-fit py-4 px-4 gap-y-3 items-center justify-center'>
            <h2 className="text-2xl font-semibold">Formulario de pre-registro</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input'
            />
            <div className='flex w-full gap-x-2'>
                <select name="tipo_documento" defaultValue="CC" id="tipo_documento" className='input max-w-fit'>
                    <option value="CC">CC</option>
                    <option value="CE">CE</option>
                    <option value="PP">PP</option>
                </select>
                <input type="number" name="documento" id="documento" className='input flex-grow' placeholder='Número de documento' />
            </div>
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='input'
            />
            <input
                type="password"
                placeholder="Telefono"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input'
            />
            <input type="text" placeholder="Dirección" className='input' />
            <select name="Barrio" className='input' defaultValue={"0"}>
                <option value="0" disabled>Selecciona tu barrio</option>
                <option value="Galan">Galan</option>
                <option value="Camelia">Camelia</option>
                <option value="Santa Isabel">Santa Isabel</option>
            </select>
            <div className='flex justify-center items-center gap-x-3'>
                <input type="checkbox" name="Terminos" id="terminos" className='size-4' />
                <label htmlFor="terminos">Acepto los <a className='hover:underline cursor-pointer'>términos y condiciones</a></label>
            </div>
            <button className='bg-contrast text-gray-100 py-2 w-fit px-8 rounded-lg hover:bg-contrast/90' type="submit">Enviar</button>
        </form>
    );
}
export default Form;