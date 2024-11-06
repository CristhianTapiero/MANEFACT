interface CardProps {
    title: string;
    description: string;
    image: string;
    price: number;
}
const Card = ({ title, description, image, price }: CardProps) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return (
        <div className="flex w-96 p-4 flex-col h-full border border-contrast rounded-md gap-y-2">
            <div className="w-5/6 h-auto rounded-2xl bg-slate-500 m-0 p-0 self-center overflow-hidden">
                <img className="object-cover" src={image} alt={title} />
            </div>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p>{description}</p>
            <p>${formattedPrice}</p>
            <a href="productos/pre-registro" className="bg-contrast rounded-lg py-2 w-fit px-2 text-gray-100 hover:bg-contrast/90 self-end">Pre-Registro</a>
        </div>
    );
};

export default Card;