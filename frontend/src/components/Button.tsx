
export interface ButtonProps {
    variant: "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon? : any;
    endIcon? :any;
    onClick : () => void;
}

export const Button = (props: ButtonProps) => {
    const baseClass = 'rounded-lg flex items-center gap-2 justify-center rounded';
    const variantClass = 
        props.variant == "primary"
        ? "bg-purple-700 text-white hover:bg-purple-800"
        : "bg-purple-200 text-purple hover:bg-purple-300"
    
    const sizeClass = 
        props.size=="sm"
        ? "text-sm p-1"
        : props.size=="md"
        ? "text-md p-2"
        : "text-lg p-3"
    
    return <>
        <button
            type='button'
            className={`${baseClass} ${variantClass} ${sizeClass}`}
        >{props.startIcon && props.startIcon}{props.text}{props.endIcon && props.endIcon}</button>
    </>
}

