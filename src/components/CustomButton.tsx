
type Props = {
    label: string;
    clicar: () => void;
}

export const CustomButton = ({label, clicar}: Props) => {
    return (
        
            <button onClick={clicar} className="p-3 text-white bg-blue-700">{label}</button>
       
    );
};

