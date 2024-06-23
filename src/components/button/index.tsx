'use client' 

interface ComponentProps{
    label: string;
    type: 'button' | 'submit';
    btnsize: 'lg' | 'md' | 'sm';
    onClick?: () => void;
}

const Button = (props:ComponentProps) =>{
    const { label, type, onClick, btnsize } = props;
    return(
        <button className={`max-w-fit flex items-center justify-center whitespace-nowrap rounded-full bg-blue-600 px-8 py-4 cursor-pointer font-medium uppercase text-white text-${btnsize}`} type={type ? "submit" : "button"} onClick={onClick}>
            <span>{label}</span>
        </button>
    )
}

export default Button