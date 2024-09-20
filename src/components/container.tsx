import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Container:React.FC<ContainerProps> = ({children, className, id}) => {
    return (
        <div id={id} className={`${className} relative w-5/6 h-5/6`}>
            {children}
        </div>
    );
}

export default Container;